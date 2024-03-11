import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteContact } from "../Redux/UserDetails";
import { getContact } from "../Redux/UserDetails";
import { useDispatch } from "react-redux";

const Delete = ({ deletId, deleteModalHide, deleteModalOpen }) => {
  const dispatch = useDispatch();
  console.log("DELETE ID", deletId);

  const handleDelete = () => {
    try {
      dispatch(deleteContact(deletId));
      deleteModalHide();
      dispatch(getContact());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={deleteModalOpen} onHide={deleteModalHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete this contact?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={deleteModalHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete} type="submit">
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default Delete;
