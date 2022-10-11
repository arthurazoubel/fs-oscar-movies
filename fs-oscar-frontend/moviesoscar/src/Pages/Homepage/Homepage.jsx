import React from 'react'
import { useContext } from 'react';
import { MainContext } from '../../index';
import {Box, Button} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import TestComponent from '../../Components/Test/TestComponent';
import { useNavigate } from 'react-router-dom';

function Homepage() {

  const navigate = useNavigate()

  function navigateTest() {
    navigate('/testcomponent')
  }
    
  return (
    <>
    <Box display='flex' alignItems='center' justifyContent='space-around' h='70px'>
      This is Homepage
    </Box>
    <Button onClick={navigateTest}>Generate a Test Component</Button>
    <Routes>
      <Route path='testcomponent' element={<TestComponent />} />
    </Routes>
    </>
  )
}

export default Homepage