import { useContext } from "react";
import "./ModalForm.css";
import { MyContext } from "../MyContext";
import { Form, Button, Modal } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const generateUniqueId = () => {
  const newUuid = uuidv4();
  return newUuid;
};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Title must contain only letters and spaces")
    .required("Title cannot be empty"),
  description: Yup.string()
    .min(25, "Description should be more than 25 characters")
    .required("Add description"),
  stage: Yup.string().required("Select stage"),
});

const ModalForm = () => {
  const {
    editForm,
    setEditForm,
    showModal,
    setShowModal,
    allTasks,
    setallTasks,
  } = useContext(MyContext);
  const editTask =
    editForm && allTasks.length > 0
      ? allTasks.filter((x) => x.id == editForm)
      : undefined;

  const initialValues = {
    title: editForm ? editTask[0].title : "",
    description: editForm ? editTask[0].description : "",
    stage: editForm ? editTask[0].stage : "",
  };

  const handleCloseModal = () => {
    setEditForm(false);
    setShowModal(false);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    handleCloseModal();
    addTask(values);
    setSubmitting(false);
    resetForm();
  };

  const handleDeleteFormEdit = () => {
    const tasks = allTasks.filter((x) => x.id !== editForm);
    setallTasks(tasks);
    handleCloseModal();
  };

  const handleEdit = (values) => {
    const originalTask = editTask[0];
    const isDifferent =
      originalTask.title !== values.title ||
      originalTask.description !== values.description ||
      originalTask.stage !== values.stage;

    if (!isDifferent) {
      handleCloseModal();
      return;
    }

    const updatedTask = {
      ...originalTask,
      title: values.title,
      description: values.description,
      stage: values.stage,
    };

    const updatedTasks = [
      ...allTasks.filter((task) => task.id !== originalTask.id),
      updatedTask,
    ];
    setallTasks(updatedTasks);
    handleCloseModal();
  };

  const addTask = (values) => {
    const newTask = {
      id: generateUniqueId(),
      title: String(values.title),
      stage: String(values.stage),
      description: String(values.description),
    };
    setallTasks([...allTasks, newTask]);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>{editForm ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>

      <Formik
        id="task-from"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={editForm ? handleEdit : handleSubmit}
      >
        {({
          isSubmitting,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group className="form-group" controlId="formTitle">
                <Form.Label>Title: </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="task title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  className={touched.title && errors.title ? "error" : null}
                />
                {touched.title && errors.title ? (
                  <div className="error-message">{errors.title}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="form-group" controlId="formDescription">
                <Form.Label>Description: </Form.Label>
                <Form.Control
                  type="textarea"
                  name="description"
                  placeholder="task description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className={
                    touched.description && errors.description ? "error" : null
                  }
                />
                {touched.description && errors.description ? (
                  <div className="error-message">{errors.description}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="form-group" controlId="formStage">
                <Form.Label>Stage: </Form.Label>
                <Form.Select
                  name="stage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.stage}
                  className={touched.stage && errors.stage ? "error" : null}
                >
                  <option>Select Task Stage</option>
                  <option value="Assigned">Assigned</option>
                  <option value="Process">Process</option>
                  <option value="Completed">Completed</option>
                </Form.Select>
                {touched.stage && errors.stage ? (
                  <div className="error-message">{errors.stage}</div>
                ) : null}
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant={editForm ? "danger" : "secondary"}
                onClick={editForm ? handleDeleteFormEdit : handleCloseModal}
              >
                {editForm ? "Delete" : "Close"}
              </Button>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Saving..."
                  : editForm
                  ? "Save Changes"
                  : "Save Task"}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalForm;
