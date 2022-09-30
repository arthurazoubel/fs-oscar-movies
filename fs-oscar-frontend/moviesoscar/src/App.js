import { Heading, Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { MainContext } from './index';
import Homepage from './Pages/Homepage/Homepage';
import Explore from './Pages/Explore/Explore';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';

function App() {

  const value = useContext(MainContext)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/explore' element={<Explore/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
