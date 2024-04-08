import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logoBranca from '../assets/logoBranca.png';

const Footer: React.FC = () => {
  return (
    <footer style={{ width: '100vw' }}>
      <Box bg="#01547D" color="white" p="4">
        <Flex justifyContent="space-between" margin="0 50px">
          <Flex justifyContent="center" alignItems="center"> {/* Center logo horizontally and vertically */}
            <Image src={logoBranca} alt="Logo FindBranca" w="106px" h="20px" />
          </Flex>
          <Flex alignContent="center" mb="20px" textAlign="center">
            <Text fontSize="22px" fontWeight="bold" lineHeight="1.5">
              Find2023 @By Schema
            </Text>
          </Flex>
          <Flex flexDirection="row" gap="20px" ml="20px">
            <Flex flexDirection="column" lineHeight="14px">
              <Text fontSize="22px" fontWeight="bold">
                Fornecedores
              </Text>
              <Text fontSize="18px" fontWeight="medium">
                Como funciona
              </Text>
              <Text fontSize="18px" fontWeight="medium">
                Cadastre-se
              </Text>
            </Flex>
            <Flex flexDirection="column" lineHeight="14px">
              <Text fontSize="22px" fontWeight="bold">
                Fale Conosco
              </Text>
              <Text fontSize="18px" fontWeight="medium">
                Central de Ajuda
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
