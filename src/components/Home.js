import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

function Home() {
  return (
    <Box textAlign="center" py={10}>
      <Heading>Welcome to Satoshi!</Heading>
      <Button colorScheme="blue" mt={5}>
        Dołącz do nas!
      </Button>
    </Box>
  );
}

export default Home;