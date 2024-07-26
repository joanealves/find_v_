import React from 'react';

import { Box } from '@chakra-ui/react';

import Capa from '../components/Capa';

import Category from '../components/Category';
import CardChamada from '../components/CardChamada';
import Destak from '../components/Destak';
import VamosConversar from '../components/VamosConversar';

const Home: React.FC = () => {
  return (
    <Box bg="#F0F0F0"> 
      <main>
        <Capa />
        <Category />
        <CardChamada />
        <Destak />
       <VamosConversar />

      </main>
    </Box>
  );
};

export default Home;
