import { useContext } from "react";
import { MyContext } from "../MyContext";

const cards = ({ title, stage, description }) => {
  const { setEditForm, setShowModal } = useContext(MyContext);

  const handleEditClick = () => {
    setShowModal(true);
    setEditForm(true)
  };

  return (
    <div className="card-container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle ">{stage}</h6>
          <p className="card-text">{description}</p>

          <button
            className="card-link btn btn-primary"
            onClick={handleEditClick}
          >
            Edit
          </button>
          <button className=" card-link btn btn-danger ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default cards;
