import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AllPhoto = (props) => {
    const { name, picture, about } = props.photo;
    return (
        
        <Card style={{ width: '20rem' }}>
  <Card.Img style={{height:"200px"}} variant="top" src={picture} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {about}
    </Card.Text>
            </Card.Body>
            <button className='btn-info mb-2'>Buy now</button>
</Card>
    );
};

export default AllPhoto;