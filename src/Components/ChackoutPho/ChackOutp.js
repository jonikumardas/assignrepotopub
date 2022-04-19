
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../../Components/ChackOut/Chackout.css';

const ChackOutp = (props) => {
    console.log(props);
    const { picture, name } = props.photo;
    return (
        
        <div className="col-md-3" >
        <div className='mt-5'>
            <Card style={{ width: '18rem'}}>
                    <Card.Img style={{ height: "225px" }}variant="top" src={picture} />
           <Card.Body>
           <Card.Title className='my-3'>{name}</Card.Title>
     
                </Card.Body>
                <Button>ChackOut</Button>
                </Card>
        </div>
        </div>
    );
};

export default ChackOutp;