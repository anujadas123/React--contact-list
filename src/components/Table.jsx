import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { getContact } from "../Redux/UserDetails";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Delete from "../components/Delete";
// import Edit from "./Edit";

const Tables = () => {
  const [showDelete, setShowDelete] = useState(null);
  // const [selectedContactId, setSelectedContactId] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.app.contacts);

  // const handleDelete = () => {
  //   dispatch(deleteContact(selectedContactId));
  //   setShowDelete(false);
  // };

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="tablesec">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL NO</th>
              <th>First Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(contacts) &&
              contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {contact.firstname} {contact.secondname}
                  </td>
                  <td>{contact.phonenumber}</td>
                  <td>{contact.email}</td>
                  <td className="btns">
                    <Link to={`/Edit/${contact._id}`} className="editbtn">
                      Edit
                    </Link>
                    <button
                      className="deletebtn"
                      onClick={() => {
                        setShowDelete(contact._id);
                        // setShowDelete(true);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {showDelete && (
        <Delete

          deleteModalOpen={() => setShowDelete(true)}
          deleteModalHide={() => setShowDelete(false)}
          deletId={showDelete}
        />
      )}
      {/* <Delete deletId={showDelete} deleteModalHide={() => setShowDelete(false)} /> */}
    </div>
  );
};

export default Tables;
