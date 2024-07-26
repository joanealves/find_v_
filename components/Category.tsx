import React from 'react';
import { Box, Heading, Flex, Button } from '@chakra-ui/react';

const Category: React.FC = () => {
  return (
    <Box className="category" textAlign="center">
      <Heading as="h2" fontFamily="Roboto" fontWeight="semibold" fontSize="24px" color="#727272" mb="20px">
        Escolha a categoria
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Card title="Casa" hoverColor="#ED9620" />
        <Card title="Tecnologia" hoverColor="#33A9FF" />
        <Card title="Saúde" hoverColor="#0FCBD2" />
        <Card title="Reforma e Manutenção" hoverColor="#357DEC" />
        <Card title="Assistência Técnica" hoverColor="#098286" />
      </Flex>
    </Box>
  );
};

interface CardProps {
  title: string;
  hoverColor: string;
}

const Card: React.FC<CardProps> = ({ title, hoverColor }) => {
  return (
    <Box className="card" w="336px" h="234px" bg="#ffffff" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)" borderRadius="8px" m="10px" p="20px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="p" fontFamily="Roboto" fontSize="20px" color="#01547D" mb="12px">
        {title}
      </Heading>
      <Button
        bg="#01547D"
        color="#ffffff"
        _hover={{ bg: hoverColor }}
        _active={{ bg: hoverColor }}
        _focus={{ boxShadow: 'none' }}
      >
        Conheça
      </Button>
    </Box>
  );
};

export default Category;
