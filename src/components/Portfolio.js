import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Portfolio() {
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      setBitcoinPrice(result.data.bpi.USD.rate_float);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      setBalance(user.balance);
    }
  }, [user]);

  return (
    <Box width="full" maxWidth="md" mx="auto" p={5}>
      <Heading>Portfolio</Heading>
      <Text>Balans: {balance}</Text>
      <Text>Aktualna cena Bitcoina: {bitcoinPrice}</Text>
    </Box>
  );
}

export default Portfolio;