import React, { createContext, useState, useEffect } from 'react';
import tasks from './components/tasks';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [allTasks, setallTasks] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const [active, setActive] = useState(null)

  const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setallTasks(storedTasks.length > 0 ? storedTasks : tasks); 
  }, []); 

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }, [allTasks]);

  const contextValues = {
    showModal,
    setShowModal,
    allTasks,
    setallTasks,
    editForm,
    setEditForm,
    active,
    setActive
  };

  return <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>;
};
