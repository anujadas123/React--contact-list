import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postContact } from "../Redux/UserDetails";


const AddContact = () => {
  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState({
    firstname: "",
    secondname: "",
    phonenumber: "",
    email: "",
  });
  console.log("inputvalues", inputVal);
  //   const {firstname, lastname,phone, email} = inputVal;

  const handleValue = (e) => {
    // const { name, value } = e.target;
    // setInputVal({ ...inputVal, [name]: value });
    setInputVal({ ...inputVal, [e.target.id]: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
        dispatch(postContact(inputVal));
        togglebtn();
    } catch (error) {
        console.log(error);
    }
  };

  const togglebtn = () => {
    setModal(!modal);
  };

  return (
    <div className="contactlist">
      <div className="addbtn">
        <button className="btnmodal" onClick={togglebtn}>
          Add Contact
        </button>
      </div>

      {modal && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <form onSubmit={handleSubmit}>
            <Modal.Dialog>
              <Modal.Header closeButton onClick={togglebtn}>
                <Modal.Title>Add Contact</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="rowsec">
                  <label htmlFor="form-control">
                    First Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a firstname"
                    id="firstname"
                    value={inputVal.firstname}
                    onChange={handleValue}
                  />

                  <label htmlFor="form-control">
                    Last Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a lastname"
                    id="secondname"
                    value={inputVal.secondname}
                    onChange={handleValue}
                  />

                  <label htmlFor="form-control">
                    Phone Number<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a number"
                    id="phonenumber"
                    value={inputVal.phonenumber}
                    onChange={handleValue}
                  />

                  <label htmlFor="form-control">
                    Email<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter a email"
                    id="email"
                    value={inputVal.email}
                    onChange={handleValue}
                  />
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={togglebtn}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  AddPost
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddContact;
