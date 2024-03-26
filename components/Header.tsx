import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      h="68px"
      color="#ffffff"
      display="flex"
      alignItems="center"
      boxShadow="0px 10px 0px 0px rgba(0, 0, 0, 0.1)"
    >
      <Box
        as="h1"
        fontFamily="Robotech Complete"
        fontSize="20px"
        color="#01547D"
        ml="50px"
        mb="27px"
      >
        FIND
      </Box>
      <Box ml="120px" mr="70px">
        <Input
          type="text"
          placeholder="Buscar"
          variant="filled"
          bg="white"
          color="#01547D"
          border="1px solid #C4C4C4"
          _focus={{ borderColor: '#01547D' }}
        />
        <i className="fa fa-search" style={{ color: '#01547D', marginLeft: '5px' }}></i>
      </Box>
      <Box>
        <a href="#" style={{ color: '#01547D', marginRight: '70px', transition: 'color 0.3s' }}>
          Quem Somos
        </a>
        <a href="#" style={{ color: '#01547D', marginRight: '70px', transition: 'color 0.3s' }}>
          Serviços
        </a>
        <a href="#" style={{ color: '#01547D', transition: 'color 0.3s' }}>
          Login
        </a>
      </Box>
      <Box ml="auto" mr="50px">
        <Button
          bg="#03A9FC"
          color="#ffffff"
          onClick={() => console.log('Cadastrar clicado')}
          _hover={{ bg: '#03A9FC' }}
          _active={{ bg: '#03A9FC' }}
          _focus={{ boxShadow: 'none' }}
          mr="20px"
        >
          Cadastre-se
        </Button>
        <Button
          bg="#1547D"
          color="#ffffff"
          onClick={() => console.log('Fornecedor clicado')}
          _hover={{ bg: '#03A9FC' }}
          _active={{ bg: '#03A9FC' }}
          _focus={{ boxShadow: 'none' }}
        >
          Sou Fornecedor
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
