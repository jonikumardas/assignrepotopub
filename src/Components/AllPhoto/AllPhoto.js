import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AllPhoto = (props) => {
    const { name, picture, about, balance } = props.photo;
    // console.log(props);

    return (
        <div className="col-md-3" style={{ height:"553px"}}>
        
        <Card style={{ width: '18rem'}}>
      <Card.Img style={{height:"200px"}} variant="top" src={picture} />
       <Card.Body>
       <Card.Title>{name}</Card.Title>
         <Card.Text>
                    {about}
                    <p className="mt-3 text-info">Price: <span className='text-black'>{balance}</span></p>
        </Card.Text>
            </Card.Body>
            <button className='btn-info mb-2 text-white'onClick={()=>props.hendelcard(props.photo)}>Buy now</button>
            </Card>
            </div>
    );
};

export default AllPhoto;