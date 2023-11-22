import React from 'react';
import Formulario from './components/Formulario/Formulario';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {

    return (
        <ChakraProvider>

            <Formulario />
     
        </ChakraProvider>
      
    )
};

export default App;