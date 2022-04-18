import React from 'react';
import { Card } from 'react-bootstrap';

const HeaderService = (props) => {
    const { name, picture, about } = props.poto;
    console.log(props.heeventHendle);
    // const { handleAddCard } = props.eventHendle;
    // console.log(props.eventHendle);
    return (

        <Card style={{ width: '20rem' }}>
        <Card.Img style={{height:"200px"}} variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {about}
          </Card.Text>
                  </Card.Body>
                  <button className='btn-info mb-2' onClick={()=>props.handleAddCard()}>Buy now</button>
      </Card>
    );
};

export default HeaderService;