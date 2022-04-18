import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import img from '../../img/as10slider.jpg';
import img1 from '../../img/ass10slideer.jpg';
import img2 from '../../img/ass10slider.png';
import './Header.css'
import Service from '../../Services/Service';
import Hooks from '../../hooks/Hooks';
import HeaderService from '../../HeaderService/HeaderService';

const Header = () => {
  const [photos, setPhotos] = Hooks([])
  // const [photo, setPhoto]=useState([])
  if (photos) {
    photos.length = 3;
  }
  
 
  
    return (
        <div>
            <div>
                
            <Carousel variant="dark">
      <Carousel.Item>
                        <img
                            className="d-block w-100 h-75"
                            src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5 className='text-info'>Tiger</h5>
      <p  className='text-white'>A lepard when its come to drink water its amiging looks his!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={img1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5 className='text-info'>Dog servive </h5>
      <p className='text-white'>Dog servive to get his distination then its looks good.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={img2}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5 className='text-info'> Deer</h5>
      <p className='text-white'>World famous dear when he come to search meal .</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
        <div className='container'>
          <div className="row" style={{justifyContent:'space-evenly'}}>
          <h2 className='text-center p-3' id='/service'> Service photo </h2>
          {
            photos.map(poto => <HeaderService key={poto.id} poto={poto}></HeaderService>)
            }
            </div>
        </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Header;