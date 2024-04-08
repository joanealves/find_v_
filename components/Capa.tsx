import React from 'react';
import { Box, Image, Button } from '@chakra-ui/react';

const Capa: React.FC = () => {
  return (
    <Box className="capa" position="relative" width="100%" height="600px">
      <Image src="/src/assets/capa.jpg" alt="Duas pessoas dando as mãos" objectFit="cover" width="100%" height="100%" />
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
        <Box color="#ffffff" fontFamily="Roboto" fontSize="36px" textAlign="left" lineHeight="40px">
          Aqui conectamos <Box as="span" color="#03A9FC">Você</Box><br />
          aos melhores <Box as="span" color="#03A9FC">Profissionais</Box>
        </Box>
        <Button bg="#03A9FC" color="#fff" w="156px" h="40px" mr="10px">
          Contratar
        </Button>
        <Button variant="outline" borderColor="#fff" color="#fff" bg="transparent" w="156px" h="40px">
          Sou Fornecedor
        </Button>
      </Box>
    </Box>
  );
};

export default Capa;
