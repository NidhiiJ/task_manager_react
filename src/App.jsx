import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Column from "./components/Column";
import React, {useContext } from "react";
import { MyContext } from "./MyContext";
import ModalForm from "./components/ModalForm";


function App() {
  const { 
    setShowModal,
    allTasks,
    setallTasks,
    active,
    setActive} = useContext(MyContext)
  const categories = ["Assigned", "Process", "Completed"];
  

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

  return (
    <>
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
    </>
  );
}

export default App;
