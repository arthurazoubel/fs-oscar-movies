import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'



export const MainContext = React.createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <MainContext.Provider value={'This is a context value'}>
        <App />
      </MainContext.Provider>
    </ChakraProvider>
  </React.StrictMode>
);