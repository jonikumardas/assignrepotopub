import React, { useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import google from '../img/google-logo.png';
import git from '../img/git.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../ShereFolder/Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Registaion = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Repassword, setRePassword] = useState('');
   const [error4, setError4] = useState('')
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(Auth);
   const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(Auth);
  // git huv and google 
  const [
    createUserWithEmailAndPassword,
    user2,
    loading2,
    error2,
  ] = useCreateUserWithEmailAndPassword(Auth);
  if (error2) {
    return ("please enter valid password")
    
  }
  // register purpass
  const Register = event => {
    event.preventDefault();
    if (password === Repassword) {
      createUserWithEmailAndPassword(email, password);
      <Routes>
        <Route render={() => <Navigate to="/service" />}></Route>
      </Routes>
  
    }
  }
  // register purpass 
    const enterEmail = e => {
        setEmail(e.target.value);
    }
    const Enterpassword = e => {
        setPassword(e.target.value);
    }
    const ReEnterpassword = e => {
        setRePassword(e.target.value);
  }
  
  const navigateLogIn = () => {
    navigate('/login');
  }
 

    return (
        <div>
           <div className='my-5 loginform'>
            <form onSubmit={Register}>
            <h2 className='text-info text-center'> Register </h2>
                <input  id="email" className='px-5 py-2 my-2 border-0' type="text" placeholder='Enter your name' required />
                    <br />
                    <input onBlur={enterEmail} id="email" className='px-5 py-2 my-2 border-0' type="email" placeholder='Enter your email addess' required />
                <br />
                <input onBlur={Enterpassword} id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Enter your email addess' required />
            <input onBlur={ReEnterpassword} id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Re-enter your email addess' required />
            <p className='text-danger'>{error4}</p>
            <p>{error2}</p>
                <br />
                <button className='px-3 py-2 my-2 border-0' id="submit" type="submit">Register</button>
                </form>
          <p> Already have account? <span id='link' onClick={navigateLogIn} className='text-danger my-2'>Please Log In</span></p>
                <hr />
                <button onClick={() => signInWithGoogle()} id="email" className='px-5 py-2 my-2 border-0' type="submit "><img src={google} alt="" /> Sign In with Google</button> <br />
                 <button onClick={()=>signInWithGithub()} id="email" className='px-5 py-2 my-2 border-0 text-gray' type="submit "><img src={git} alt="" /> Sign In with Github </button>
            </div> 
           
            
    </div>
    );
};

export default Registaion;