import { useState } from 'react';
import AllPhoto from '../AllPhoto/AllPhoto';
import ChackOut from '../ChackOut/ChackOut';
import Hooks from '../hooks/Hooks';
 
const Service = () => {
    const [clickPotos, setClickPoto] = useState({});
    const [photos, setPhotos] = Hooks([]);
    const hendeleCard = (poto) => {
        const selectpoto = [...photos, poto];
        console.log(selectpoto);
        setClickPoto(selectpoto);
        
        
    }
     return (
         <div className='container'>
              <h1>service container</h1>
             <div className="row justify-content-space-between">
             {
                 photos.map(photo => <AllPhoto key={photo.id}
                     photo={photo}
                     hendelcard={hendeleCard}
                 ></AllPhoto>)
                 }

            </div>
             
         </div>
     );
 };
 
 export default Service;