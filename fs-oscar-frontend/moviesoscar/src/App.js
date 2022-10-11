import { Heading, Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { MainContext } from './index';
import Homepage from './Pages/Homepage/Homepage';
import Explore from './Pages/Explore/Explore';
import Navbar from './Components/Navbar/Navbar';
import Addmovie from'../src/Pages/AddMovie/Addmovie'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';


function App() {

  const value = useContext(MainContext)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/*' element={<Homepage/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/myprofile' element={<Addmovie/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
