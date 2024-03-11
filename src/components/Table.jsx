import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { getContact } from "../Redux/UserDetails";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../components/Delete";
import Edit from "../components/Edit";
import Pagination from "./pagination/Pagination";

const Tables = () => {
  const [showDelete, setShowDelete] = useState(null);
  const [showEdit, setShowEdit] = useState(null);
  console.log("edit,,,", showEdit);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.app.contacts);

  const page = useSelector((state) => state.app.page);
  const limit = useSelector((state) => state.app.limit);
  const search = useSelector((state) => state.app.search);

  console.log(page);
  // console.log(limit)
  // console.log(search)

  const pageCount = useSelector((state) => state.app.pageCount);
  console.log(pageCount);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const data = { page: currentPage, limit, search };
    dispatch(getContact(data));
  }, [dispatch, page, limit, search, currentPage]);

  const handlePagination = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const startIndex = (currentPage - 1) * limit + 1;

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
              contacts?.map((contact, index) => (
                <tr key={index}>
                  <td>{startIndex + index}</td>
                  <td>
                    {contact.firstname} {contact.secondname}
                  </td>
                  <td>{contact.phonenumber}</td>
                  <td>{contact.email}</td>
                  <td className="btns">
                    <button
                      className="editbtn"
                      onClick={() => {
                        setShowEdit(contact._id);
                      }}
                    >
                      Edit
                    </button>
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
      <Pagination pageCount={pageCount} handlePagination={handlePagination} />

      {showDelete && (
        <Delete
          deleteModalOpen={() => setShowDelete(true)}
          deleteModalHide={() => setShowDelete(false)}
          deletId={showDelete}
        />
      )}

      {showEdit && (
        <Edit
          editModalOpen={() => setShowEdit(true)}
          editModalHide={() => setShowEdit(false)}
          editId={showEdit}
        />
      )}

      {/* <Delete deletId={showDelete} deleteModalHide={() => setShowDelete(false)} /> */}
    </div>
  );
};

export default Tables;
