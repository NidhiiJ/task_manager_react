import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MyContext } from '../MyContext';
import React, {useContext} from 'react'

const cards = ({ title, stage,id, description,handleEditClick,handleDelete }) => {
  // setActive card id for drag card context
const {setActive} = useContext(MyContext)
  return (
    <div className="card-container" >
      <Card style={{ width: '18rem' }} draggable id={id} onDragStart={()=>{setActive(id)}} onDragEnd={()=>{setActive(null)}} >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{stage}</Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link><Button variant="primary" onClick={handleEditClick}>Edit</Button></Card.Link>
        <Card.Link><Button variant="danger" onClick={handleDelete}>Delete</Button></Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default cards;
