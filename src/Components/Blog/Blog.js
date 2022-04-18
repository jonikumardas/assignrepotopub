import React from 'react';
import Footer from '../ShereFolder/Footer/Footer';

const Blog = () => {
    return (
        <div className='container'>
            <div className="row justify-content-space-evenly">
                <div className="col-md-4  p-2 border mt-3">
                    <h2>
                    Deffarance between authorization and authentication
                    </h2>
                    <p> <span className='text-info'>Authorization</span> Authorization means a user if he valid he access private somethings and authorizatin determines what resources a user can access.Authorization always takes place after authentication.
                        
                        <br />

                        <span className='text-info'> Authentication</span> 
                        Authentication at first verifies who the user is. when a unknown person want to take access somthing private. authorization want to know about his details. without varify he can't entree the the private .Authentication is the first step of a good identity and access management process.
                        
                    </p>

                </div>
                <div className="col-md-4  p-2 border mt-3">
                    <h2>
                   Use of Firebase
                    </h2>
                    <p> <span className='text-info'> Firebase</span> give extra security for a authorization a web site. Firebase give some extra tools and services which is free and opensource and firebase give free hosting and another extra facilitis such as  Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment</p>

                </div>
                <div className="col-md-4 p-2 border mt-3">
                    <h2>
                    Firebase provide
                    </h2>
                    <p> <span className='text-info'> Firebase provide</span> some spacial tools . and some valuable service such as free hosting , google analytics. Authintication service and it can be use web devolopment and andoid app apple app. and free sdk which is help a devoloper works easy and funny. Fire base give Federated identity provider integration,Email and password based authentication,Phone number authentication,
                    Custom auth system integration etc.</p>

                </div>
            </div>
            <div className='fixed-bottom'><Footer></Footer></div>
            
        </div>
    );
};

export default Blog;