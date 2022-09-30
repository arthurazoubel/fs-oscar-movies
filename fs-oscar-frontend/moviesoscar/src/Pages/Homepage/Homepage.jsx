import React from 'react'
import { useContext } from 'react';
import { MainContext } from '../../index';
import {Box} from '@chakra-ui/react'

function Homepage() {
    
  return (
    <>
    <Box display='flex' alignItems='center' justifyContent='space-around' h='70px'>
      This is Homepage
    </Box>
    </>
  )
}

export default Homepage