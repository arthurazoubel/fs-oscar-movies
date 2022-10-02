import React from 'react'
import { Box, FormControl, FormLabel, Input, FormHelperText, Container, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

function Signup() {

    const [newUser, setNewUser] = useState({
        name:'',
        email:'',
        password:'',
        retypepassword:''
    })

    function signupInputChanges(e) {
        const {name, value} = e.target
        //console.log(e.target.value)
        //console.log(e.target.name)
        setNewUser({...newUser, [name]: value})
    }

    function createUser() {
        if(newUser.password === newUser.retypepassword) {
            console.log('Passwords matched')
        }
        else {
            console.log("Passwords don't matched")
        }
        // HERE YOU SEND A REQUEST TO THE DATABASE WITH THE NEWUSER OBJECT AS BODY
        console.log(newUser)
    }


    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' w='50%' m='auto'>
            <FormControl mt='2rem'>
                <Container mb='2rem'>
                <FormLabel>Name</FormLabel>
                <Input name='name' type='text' placeholder='First and last name' value={newUser.name} onChange={signupInputChanges} />
                </Container>

                <Container mb='2rem'>
                <FormLabel>Email Address</FormLabel>
                <Input name='email' type='email' value={newUser.email} onChange={signupInputChanges}/>
                </Container>

                <Container mb='2rem'>
                <FormLabel>Create a Password</FormLabel>
                <Input name='password' type='password' value={newUser.password} placeholder='At least 8 characters' onChange={signupInputChanges}/>
                </Container>

                <Container mb='2rem'>
                <FormLabel>Re-type Your Password</FormLabel>
                <Input name='retypepassword' type='password' value={newUser.retypepassword} onChange={signupInputChanges}/>
                </Container>

            </FormControl>
            <Button colorScheme={'yellow'} onClick={createUser}>Create Account</Button>
        </Box>
    )
}

export default Signup