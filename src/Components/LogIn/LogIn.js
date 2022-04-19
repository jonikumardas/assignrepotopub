import React, { useState } from 'react';
// import { Toast } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Auth from '../ShereFolder/Firebase/Firebase.init';
import './LogIn.css';
const LogIn = () => {
    // const ref=useHref()
    const auth = useAuthState(Auth);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error1 ,setError1]=useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(Auth);
    const navigateRegister = e => {
        navigate('/registation');

    }
    
    const hendelEmailChange = e => {
        setEmail(e.target.value);
        
    }
    const hendelpassword = e => {
        setPassword(e.target.value);
    }
    const hendelsubmit = e => {
        e.preventDefault();
        if (user===auth.user) {
            signInWithEmailAndPassword(email, password);
            navigate('/service');
            return;
        }
        else {
            setError1("please enter right information");
            return;
        }
        
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
                    <p className='text-danger'>{error1}</p>
                    <button className='px-3 py-2 my-2 border-0' id="submit" type="submit">Log in</button>
                </form>
                <p> Don't have account? <span id='link' onClick={navigateRegister} className='text-danger mt-2'>Please Register</span></p>
                </div>
   </div>
    );
};

export default LogIn;