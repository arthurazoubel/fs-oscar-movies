import React from 'react'
import { useContext } from 'react';
import { MainContext } from '../../index';
import { Box, Flex, Text, Spacer, ButtonGroup, Button } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Signup from '../../Pages/Signup/Signup';
import Login from '../Login/Login';


function Navbar() {
  const value = useContext(MainContext)

  return (
    <Box backgroundColor='grey'>
      <Flex p='2rem' minWidth='max-content' alignItems='center' gap='2'>
        <Flex ml='3rem'>
          <Text fontSize='1.5rem' mr='2rem'><Link to='/'>Home</Link></Text>
          <Text fontSize='1.5rem'><Link to='/explore'>Explore</Link></Text>
        </Flex>
        <Spacer border='2px' />
        <ButtonGroup gap='2'>
          <Link><Login /></Link>
          <Button><Link to='/signup'>Sign Up</Link></Button>
          <Button><Link to='/myprofile'>My Profile</Link></Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Navbar