import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteContact } from '../Redux/UserDetails'
import { useDispatch } from 'react-redux';

const Delete = ({ deletId, deleteModalHide,deleteModalOpen }) => {
  const dispatch = useDispatch();
  console.log("idddd", deletId);
 
  const handleDelete = () => {
    dispatch(deleteContact(deletId));
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
          <Button variant='secondary' onClick={deleteModalHide}>Cancel</Button>
          <Button variant='danger' onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default Delete;
