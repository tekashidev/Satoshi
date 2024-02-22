import React, { useState } from 'react';
import { Box, Heading, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useFaker } from 'faker-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  
  const handleLogin = () => {
    // Tworzymy fikcyjnego użytkownika przy użyciu faker-react
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    // Wywołujemy funkcję login z useAuth, aby ustawić stan autoryzacji użytkownika
    login(user.email, user.password);
    // Po pomyślnym zalogowaniu użytkownika, przechodzimy do strony portfela
    history.push('/portfolio');
  };


  return (
    <Box width="full" maxWidth="md" mx="auto" p={5}>
      <Heading>Login</Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;