import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Destak: React.FC = () => {
  return (
    <Box className="destaque" textAlign="center">
      <Heading as="h2" fontSize="24px" color="#727272" mb="20px">
        Profissionais em destaque:
      </Heading>
      <Box display="flex" justifyContent="center">
        <DestaqueCard title="Profissional 1" />
        <DestaqueCard title="Profissional 2" />
        <DestaqueCard title="Profissional 3" />
      </Box>
    </Box>
  );
};

const DestaqueCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box
      bg="#FFFFFF"
      w="318px"
      h="330px"
      m="10px"
      borderRadius="10px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      p="20px"
      rounded="10px"
    >
      <Box display="flex" alignItems="center">
        <Box w="39px" h="36px" bg="gray" borderRadius="50%" mr="10px" />
        <Text fontSize="15px" color="#637381" fontFamily="Inter" fontWeight="regular">{title}</Text>
      </Box>
      <Box mt="20px" textAlign="left">
        <Text fontSize="15px" color="#1e1e1e" fontFamily="Inter" fontWeight="regular">Categoria</Text>
        <Text fontSize="14px" color="#1e1e1e" fontFamily="Inter" fontWeight="regular">Breve resumo da experiência do profissional...</Text>
      </Box>
      <Box mt="34px" display="flex" justifyContent="center">
        <Button w="250px" h="32px" bg="#01547D" color="white" borderRadius="10px">Contratar</Button>
      </Box>
    </Box>
  );
};

export default Destak;
