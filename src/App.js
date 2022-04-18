import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import ChackOut from './Components/ChackOut/ChackOut';
import Error from './Components/Error/Error';
import LogIn from './Components/LogIn/LogIn';
import Registaion from './Components/Registation/Registaion';
import Service from './Components/Services/Service';
import Header from './Components/ShereFolder/Header/Header';
import Manu from './Components/ShereFolder/Manu/Manu';

function App() {
  return (
    <div>
      <Manu></Manu>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/home' element={<Header></Header>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/chackout' element={<ChackOut></ChackOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/registation' element={<Registaion></Registaion>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
