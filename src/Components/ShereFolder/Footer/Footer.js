import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='container-fluid bg-dark text-info mt-5 p-2'>
            <p className='text-center'>Copyright &copy; {year} All Rights Reserved </p>
        </div>
    );
};

export default Footer;