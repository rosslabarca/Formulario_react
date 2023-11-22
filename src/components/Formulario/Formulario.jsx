import React, { useState } from 'react';
import { ChakraProvider, Box, VStack, Heading, FormControl, FormLabel, Input, InputLeftAddon, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

const Formulario = () => {

  const [formState, setFormState] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    passwordConfirmar: '',
  });

  const { nombre, apellido, email, telefono, password, passwordConfirmar } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  };


  const onSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  };


  return (
    <ChakraProvider>

      <Box
        p={4}
        maxWidth="md"
        borderWidth={1}
        borderRadius="md"
        boxShadow="md"
        margin="auto"
        mt={10}
        bg="lightblue"
      >
        <VStack spacing={4}>

          <Heading as="h2" size="lg">
            Formulario
          </Heading>

          <FormControl>
            <FormLabel>Nombre:</FormLabel>
            <Input
              type="text"
              name="nombre"
              placeholder="ingrese su nombre"
              value={nombre}
              onChange={onInputChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Apellido:</FormLabel>
            <Input
              type="text"
              name="apellido"
              value={apellido}
              placeholder="ingrese su apellido"
              onChange={onInputChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="ingrese su email"
              onChange={onInputChange}
            />
          </FormControl>

          <FormControl >
            <FormLabel border="lightgray">Teléfono:</FormLabel>
            <InputGroup>
              <InputLeftAddon children='+54' />
              <Input
                type="tel"
                name="telefono"
                value={telefono}
                placeholder="ingrese su telefono"
                onChange={onInputChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Clave:</FormLabel>
            
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="ingrese su clave"
                onChange={onInputChange}
              />
           
           
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Confirmar Clave:</FormLabel>
            <Input
              type="password"
              name="passwordConfirmar"
              value={passwordConfirmar}
              placeholder="Confirme su clave"
              onChange={onInputChange}
            />
          </FormControl>

          <Button type="submit" onSubmit={onSubmit}>
            Ingrese
          </Button>

        </VStack>

      </Box>

    </ChakraProvider>
  );
};

export default Formulario;
