import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getContact, EditContact, getContactId } from "../Redux/UserDetails";

const Edit = ({ editId, editModalHide, editModalOpen }) => {
  const dispatch = useDispatch();
  console.log("EDIT ID", editId); 

  useEffect(() => {
    dispatch(getContactId(editId));
  }, [editId, dispatch]);

  const contact = useSelector((state) => state.app?.contact);
  console.log("gh", contact);
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleEdit = () => {
    try {
      const data = {
        firstname,
        secondname,
        phonenumber,
        email,
        id:editId
      };
      dispatch(EditContact(data));
      editModalHide();
      dispatch(getContact());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setFirstName(contact?.firstname);
    setSecondName(contact.secondname);
    setPhoneNumber(contact.phonenumber);
    setEmail(contact.email);
  }, [contact]);
  return (
    <Modal show={editModalOpen} onHide={editModalHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title><h3>Edit Contact</h3></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {contact && (
            <div className="editlist">
              <label htmlFor="form-control">
                First Name<span>*</span>
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="enter a firstname"
                id="firstname"
              />

              <label htmlFor="form-control">
                Last Name<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enter a lastname"
                id="secondname"
                value={secondname}
                onChange={(e) => setSecondName(e.target.value)}
              />

              <label htmlFor="form-control">
                Phone Number<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enter a number"
                id="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <label htmlFor="form-control">
                Email<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="enter a email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={editModalHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit} type="submit">
            Update
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default Edit;
