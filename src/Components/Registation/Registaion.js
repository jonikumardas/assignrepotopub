import React from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../img/google-logo.png';
import git from '../img/git.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const Registaion = () => {
    const navigate = useNavigate();
    const navigateLogIn = e => {
        navigate('/login');
    }

    return (
        <div>
           <div className='my-5 loginform'>
            <form action="">
            <h2 className='text-info text-center'> Register </h2>
                <input  id="email" className='px-5 py-2 my-2 border-0' type="text" placeholder='Enter your name' required />
                    <br />
                    <input  id="email" className='px-5 py-2 my-2 border-0' type="email" placeholder='Enter your email addess' required />
                <br />
                <input id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Enter your email addess' required />
                <br />
                <button className='px-3 py-2 my-2 border-0' id="submit" type="submit">Register</button>
                </form>
                <p> Already have account? <span id='link' onClick={navigateLogIn} className='text-danger my-2'>Please Log In</span></p>
                <hr />
                <button id="email" className='px-5 py-2 my-2 border-0' type="submit "><img src={google} alt="" /> Sign In with Google</button> <br />
                <button id="email" className='px-5 py-2 my-2 border-0 text-gray' type="submit "><img src={git} alt="" /> Sign In with Github </button> <br />
            </div> 
           
            
    </div>
    );
};

export default Registaion;