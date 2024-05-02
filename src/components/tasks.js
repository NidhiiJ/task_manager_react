import { v4 as uuidv4 } from 'uuid';

const generateUniqueId = () => {
  const newUuid = uuidv4(); 
  return newUuid;
};

const tasks = [
    {
      id: generateUniqueId(),
      title: "Task one",
      stage: "Assigned",
      description: "Get fruits and vegetables from raju uncle",
    },
    {
      id: generateUniqueId(),
      title: "Task two",
      stage: "Process",
      description: "Get fruits and vegetables from raju uncle",
    },
    {
      id: generateUniqueId(),
      title: "Task three",
      stage: "Completed",
      description: "Get fruits and vegetables from raju uncle",
    },
    {
      id: generateUniqueId(),
      title: "Task four",
      stage: "Assigned",
      description: "Get fruits and vegetables from raju uncle",
    },
    {
      id: generateUniqueId(),
      title: "Task five",
      stage: "Process",
      description: "Get fruits and vegetables from raju uncle",
    },
    {
      id: generateUniqueId(),
      title: "Task six",
      stage: "Assigned",
      description: "Get fruits and vegetables from raju uncle",
    },
  ];

  export default tasks