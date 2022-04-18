import AllPhoto from '../AllPhoto/AllPhoto';
import Hooks from '../hooks/Hooks';
 
const Service = () => {
    const [photos, setPhotos] = Hooks([]);
     return (
         <div className='container'>
             <div className="row">
                 
             <h1>service container</h1>
             {
                 photos.map(photo => <AllPhoto key={photo.id}
                 photo={photo}
                 ></AllPhoto>)
                 }

            </div>
             
         </div>
     );
 };
 
 export default Service;