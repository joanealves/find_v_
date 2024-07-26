import React from 'react';
import { Box, Input, Button, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      h="68px"
      bg="#ffffff"
      color="#01547D"
      display="flex"
      alignItems="center"
      boxShadow="0px 10px 0px 0px rgba(0, 0, 0, 0.1)"
      borderColor="#C4C4C4"
    >
      <Box
        as="h1"
        fontFamily="Robotech Complete"
        fontSize="24px"
        ml="50px"
        mb="27px"
      >
        FIND
      </Box>
      <Box ml="120px" mr="70px" position="relative">
        <Input
          type="text"
          placeholder="Buscar"
          variant="filled"
          bg="transparent"
          color="#01547D"
          border="1px solid #637381" // Alterado para cinza claro
          _focus={{ borderColor: '#01547D' }}
          width="266px"
          height="36px"
          paddingRight="35px"
        />
        <FontAwesomeIcon
          icon={faSearch}
          style={{ color: '#1975FF', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
        />
      </Box>
      <Box>
        <a href="#" style={{ color: '#01547D', marginRight: '70px', transition: 'color 0.3s', borderBottom: 'none', _hover: { color: '#33A9FC' } }}>
          Quem Somos
        </a>
        <a href="#" style={{ color: '#01547D', marginRight: '70px', transition: 'color 0.3s', borderBottom: 'none', _hover: { color: '#33A9FC' } }}>
          Serviços
        </a>
        <Link href="/login" color="#01547D" transition="color 0.3s" borderBottom="none" _hover={{ color: '#33A9FC' }}>
          Login
        </Link>
      </Box>
      <Box ml="auto" mr="50px" display="flex" flexDirection="row">
        <Button
          bg="#03A9FC"
          color="#ffffff"
          onClick={() => console.log('Cadastrar clicado')}
          _hover={{ bg: '#33A9FC' }}
          _active={{ bg: '#03A9FC' }}
          _focus={{ boxShadow: 'none' }}
          mr="-1px"
          width="156px"
          height="36px"
          borderTopLeftRadius="10px"
          borderBottomLeftRadius="10px"
          border="none" // Removendo borda
        >
          Cadastre-se
        </Button>
        <Button
          bg="#01547D"
          color="#ffffff"
          onClick={() => console.log('Fornecedor clicado')}
          _hover={{ bg: '#33A9FC' }}
          _active={{ bg: '#01547D' }}
          _focus={{ boxShadow: 'none' }}
          ml="-1px"
          width="156px"
          height="36px"
          borderTopRightRadius="10px"
          borderBottomRightRadius="10px"
          border="none" // Removendo borda
        >
          Sou Fornecedor
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
