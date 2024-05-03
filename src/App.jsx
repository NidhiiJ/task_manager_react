import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Column from "./components/Column";
import { useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import tasks from "./components/tasks";
import ModalForm from "./components/ModalForm";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [allTasks, setallTasks] = useState([]);
  const [editForm, setEditForm] = useState(false)
  const [active, setActive] =useState(null)

  const loadedTasks = tasks
  const categories = ["Assigned", "Process", "Completed"];
  
  // set tasks on load
  useEffect(() => {
    setallTasks(loadedTasks)
  }, [])

  // function for card drag and drop in column
  const onDrop= (stage)=>{
    console.log(`${active} is going to be ${stage}`)
    const task = allTasks.filter((x)=>x.id == active)
    const updatedTask = {
      ...task[0],
      stage : stage
    }
    const newList = [...allTasks.filter((x)=>x.id !== active),updatedTask]
    setallTasks(newList)
    setActive(false)
  }
  
  const handleShowModal = () => setShowModal(true);

  // contexts for ContextApi
  const contexts = {showModal, setShowModal, allTasks, setallTasks, editForm, setEditForm, active, setActive}

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
            return <Column key={i} category={x} onDrop={()=>onDrop(x)}/>;
          })}
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
