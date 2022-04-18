
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import img from '../../img/as10slider.jpg';
import img1 from '../../img/ass10slideer.jpg';
import img2 from '../../img/ass10slider.png';
import './Header.css';
import image from '../../img/camara10 (2).jpg';
import Hooks from '../../hooks/Hooks';
import HeaderService from '../../HeaderService/HeaderService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nevigete=useNavigate()
  const [photos, setPhotos] = Hooks([])
  // const[photo,setPhoto]=useState([])
  if (photos) {
    photos.length = 3;
  }
//   const handleAddCard = () => {
//     console.log("product");
    
// }
  
 
  
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
              photos.map(poto => <HeaderService
                key={poto.id}
                poto={poto}
              ></HeaderService>)
            }
            </div>
        </div>
        <h2 className='text-info text-center p-5'>Jhon creative studio</h2>
        <div className='container mt-5'>
          <div className="row">
            <div className="col-md-5">
              <img style={{width:"350px"}} src={image} alt="" />

            </div>
            <div className="col-md-5">
              <h2 className='text-gray'>
                Best camara click for ever
              </h2>
              <p>It's no wonder that photography quotes are one of the most popular things to share on social media, usually by other photographers, of course.

Reading one line that encapsulates our love for photography and art is powerful and often reminds us of the importance of documenting moments with our cameras.

Here's a selection of the most inspirational photography quotes primarily made by great and famous photographers over the past 100 years.

No matter whether you're an amateur learning more about photography or you're looking for the best picture caption, our favorite list of 96 iconic quotes about photography will definitely inspire you.</p>

            </div>
         </div>
        </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Header;