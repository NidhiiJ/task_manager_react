import { useContext, useState } from "react";
import { MyContext } from "../MyContext";
import { Button, Modal } from "react-bootstrap";

const ModalForm = () => {
  const { editForm, setEditForm, showModal, setShowModal } = useContext(MyContext);

  const handleCloseModal = () => {
    setEditForm(false);
    setShowModal(false);
  };
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>{editForm == true ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is the body of the modal.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
