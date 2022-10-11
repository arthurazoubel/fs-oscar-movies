import React from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Container,
  Button,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Textarea
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Addmovie() {

  const navigate = useNavigate()

  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    length: '',
    storyline: ''
  })

  function addMovieInputChange(e) {
    const { name, value } = e.target
    setNewMovie({ ...newMovie, [name]: value })

  }

  function addMovie() {
    // HERE YOU SEND A REQUEST TO THE DATABASE WITH THE NEWUSER OBJECT AS BODY
    console.log(newMovie)
    navigate('/')
  }



  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' w='50%' m='auto'>
      <FormControl mt='1rem'>
       
        <Container mb='1.3rem'>
          <FormLabel>Title</FormLabel>
          <Input name='title' type='text' placeholder='Movie title' value={newMovie.title} onChange={addMovieInputChange} />
        </Container>

        <Container mb='1.3rem'>
          <FormLabel>Director</FormLabel>
          <Input name='director' type='text' placeholder='Movie director' value={newMovie.director} onChange={addMovieInputChange} />
        </Container>

        <Flex direction='column'>
        <Container mb='1.3rem'>
          <FormLabel>Length</FormLabel>
          <Flex flexDirection='row'>
          <Input name='length' type='number' placeholder='Duration' w='23%' value={newMovie.length} onChange={addMovieInputChange} />
          {/* <NumberInput defaultValue={120} min={1} mr='1rem' w='20%' onChange={addMovieInputChange}>
            <NumberInputField name='length' type='number' placeholder='Duration'/>
            <NumberInputStepper>
              <NumberIncrementStepper  />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
           */}
          <Text mb='auto' mt='auto' ml='1.2rem' fontSize='1.2rem'>Minutes</Text>
          </Flex>
        </Container>

        <Container mb='1.3rem'>
          <FormLabel>Cover</FormLabel>
          <Button>Upload Image</Button>
        </Container>
        </Flex>

        <Container mb='1.3rem'>
          <FormLabel>Storyline</FormLabel>
          <Textarea size='md' height='140px' resize='none' name='storyline' type='textarea' placeholder='Write about the movie' value={newMovie.sinopse} onChange={addMovieInputChange} />
        </Container>

      </FormControl>
      <Button colorScheme={'yellow'} onClick={addMovie}>Add Movie</Button>
    </Box>
  )
}

export default Addmovie