import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Registaion from '../Registation/Registaion';
import './LogIn.css'

const LogIn = () => {
    const navigate = useNavigate();
    const navigateRegister = e => {
        navigate('/registation');
    }

    return (
        <div>
            <div className='mt-5 loginform'>
            <form action="">
            <h2 className='text-info'> Log In </h2>
                <input  id="email" className='px-5 py-1 my-2 border-0' type="email" placeholder='Enter your email addess' required />
                <br />
                <input id="password" type="password" className='px-5 my-2 py-1 border-0' placeholder='Enter your email addess' required />
                <br />
                <button className='text-center px-3 py-1 my-2 border-0 text-info' id="submit" type="submit">Log in</button>
                </form>
                <p> Don't have account? <span id='link' onClick={navigateRegister} className='text-danger mt-2'>Please Register</span></p>


                </div>
            


        </div>
    );
};

export default LogIn;