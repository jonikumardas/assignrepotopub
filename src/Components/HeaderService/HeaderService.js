import React from 'react';
import { Card } from 'react-bootstrap';

const HeaderService = (props) => {
    const { name,picture,about } = props.poto;
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

export default HeaderService;