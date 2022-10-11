import { Box } from '@chakra-ui/react'
import React from 'react'

function TestComponent() {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' w='50%' m='auto'>
            <h1>This is a Test Component</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate earum tempore libero architecto velit voluptates rerum sapiente dolorem! Itaque aliquam ea quibusdam praesentium impedit excepturi magni aliquid aspernatur, ipsa quisquam.</p>
            </Box>
        </div>
    )
}

export default TestComponent