import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const cards = ({ title, stage, description,handleEditClick,handleDelete }) => {

  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }} >
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
