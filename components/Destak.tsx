// Destak.tsx
import React from 'react';
import { Box, Heading, Card} from '@chakra-ui/react';
const Destak: React.FC = () => {
  return (
    <Box className="destaque" textAlign="center">
      <Heading as="h2" fontSize="24px" color="#727272" mb="20px">
        Profissionais em destaque:
      </Heading>
      <Box display="flex" justifyContent="center">
        <Card title="Profissional 1" />
        <Card title="Profissional 2" />
        <Card title="Profissional 3" />
      </Box>
    </Box>
  );
};

export default Destak;
