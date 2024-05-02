import "./App.css";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Column from "./components/Column";
import { useState, useEffect } from "react";

import { MyContext } from "./MyContext";
import tasks from "./components/tasks";
import ModalForm from "./components/ModalForm";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [allTasks, setallTasks] = useState([]);
  const [editForm, setEditForm] = useState(false)
  const loadedTasks = tasks
  const categories = ["Assigned", "Process", "Completed"];
  
  useEffect(() => {
    setallTasks(loadedTasks)
  }, [])
  


  const handleShowModal = () => setShowModal(true);

  const contexts = {showModal, setShowModal, allTasks, setallTasks, editForm, setEditForm}
  return (
    <>
    <MyContext.Provider value={contexts}>
      <section className="header">
        <h1>Task Management</h1>
        <button
          className="btn btn-secondary"
          style={{ width: "max-content" }}
          onClick={handleShowModal}
        >
          Add Task
        </button>
        <ModalForm/>
        </section>
        <div className="columns-container">
          {categories.map((x, i) => {
            return <Column key={i} category={x} />;
          })}
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
