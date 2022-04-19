import React from 'react';
import ChackOutp from '../ChackoutPho/ChackOutp';
import Hooks from '../hooks/Hooks';
import './Chackout.css';

const ChackOut = () => {
    const [phots, setPhtos] = Hooks();
    return (
    <div className='row justify-content-space-evenly'>
            {
                phots.map(poto => <ChackOutp key={poto.id}
                photo={poto}
                ></ChackOutp>)
            }
         
    </div>
    );
};

export default ChackOut;