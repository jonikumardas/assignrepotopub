import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Auth from '../ShereFolder/Firebase/Firebase.init';
import './LogIn.css';
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(Auth);
   
    const navigate = useNavigate();
    const location = useLocation();
    const from=location.state?.from?.pathname|| "/"
    const navigateRegister = e => {
        navigate('/registation');

    }
    
    const hendelEmailChange = e => {
        setEmail(e.target.value);
        
    }
    const hendelpassword = e => {
        setPassword(e.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
        
    }
    const hendelsubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    
    return (
        <div>
            <div className='mt-5 loginform'>
            <form onSubmit={hendelsubmit}>
            <h2 className='text-info text-center'> Log In </h2>
                <input onBlur={hendelEmailChange}  id="email" className='px-5 py-2 my-2 border-0' type="email" placeholder='Enter your email addess' required />
                <br />
                <input onBlur={hendelpassword} id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Enter your email addess' required />
                    <br />
                    <p className='text-danger'>{error}</p>
                    <button className='px-3 py-2 my-2 border-0' id="submit" type="submit">Log in</button>
                </form>
                <p> Don't have account? <span id='link' onClick={navigateRegister} className='text-danger mt-2'>Please Register</span></p>
                </div>
   </div>
    );
};

export default LogIn;