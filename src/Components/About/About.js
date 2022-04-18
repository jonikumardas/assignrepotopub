import React from 'react';
import image from '../img/jon-img.jpg'
import Footer from '../ShereFolder/Footer/Footer';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 ms-3 justify-content-center align-items-center">
                        <img src={image} alt="This is joni kumar das" />
                        
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-info'> About me </h1>
                        <p>This is Joni kumar das.I am  a succassful programmer in bangladesh and I want to be populer in merketplace & want to be spacial icon on others merket place.. I have started my programming juarny since 2020. and my mission 2022 wanna MERNstack devaloper. so I want my mission will be successfull with programming hero. I hope I can do something. Thank you.</p>

                    </div>
                </div>
            </div>
            <div className='fixed-bottom'><Footer></Footer></div>
            
        </div>
    );
};

export default About;