import React, { useContext, useState } from "react";
import Card from "./Card";
import { MyContext } from "../MyContext";

const Column = ({ category, onDrop }) => {
  const { allTasks, setallTasks, setEditForm, setShowModal } = useContext(MyContext);
  const tasks = allTasks.filter((task) => task.stage === category);

  // handle card edit button
  const handleEditClick = (id) => {
    setEditForm(id);
    setShowModal(true);
  };

  // handle card delete button
  const handleDelete = (id) => {
    const tasks = allTasks.filter((x) => x.id !== id);
    setallTasks(tasks);
  };
  return (
    <div
      id="dropArea"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="column">
        <h4>{category}</h4>

        {tasks.map((x, i) => {
          return (
            <Card
              key={x.id}
              title={x.title}
              id={x.id}
              stage={x.stage}
              description={x.description}
              handleEditClick={() => handleEditClick(x.id)}
              handleDelete={() => handleDelete(x.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Column;
