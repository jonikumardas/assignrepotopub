import React from 'react';
import { Card } from 'react-bootstrap';

const HeaderService = (props) => {
    const { name, picture, about,balance } = props.poto;
    return (

        <Card style={{ width: '20rem' }}>
        <Card.Img style={{height:"200px"}} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about}
            <p className="mt-3 text-info">Price: <span className='text-black'>{balance}</span></p>
            
          </Card.Text>
                  </Card.Body>
                  <button className='btn-info mb-2 text-white'>Buy now</button>
      </Card>
    );
};

export default HeaderService;