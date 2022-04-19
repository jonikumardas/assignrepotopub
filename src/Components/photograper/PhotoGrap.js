import React from 'react';
import photo from '../img/photograper.jpg';

const PhotoGrap = () => {
    return (
        <div className="mt-5">
      
            <div className='container'>
            <div className="row justify-content-space-evenly">
                <div className="col-md-5">
                    <img src={photo} alt="" />
                </div>
                <div className="col-md-5">
                    <h3 className='text-info'>Professionl Photograper</h3>
                    <p className='text-gray'>Hello dear iam a Professionl photo grapher. I have a cannon 800D camara altrawaid photography. I am selling photo. Here I have some photo which is awerded photo uin photo contest. here you will get outstanding photo . if you want you can buy every photo.I have all paper which i will provide my clint.If you want You can buy for your coluction.</p>

                </div>
            </div>
            </div>
            </div>
      );
    };

export default PhotoGrap;