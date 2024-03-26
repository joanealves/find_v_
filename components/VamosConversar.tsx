// VamosConversar.tsx
import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const VamosConversar: React.FC = () => {
  return (
    <Box display="flex" alignItems="flex-end" justifyContent="flex-start" mt="20px">
      {/* Aqui vai a imagem */}
      <Box mr="20px">
        <img src="caminho_da_imagem" alt="Imagem" />
      </Box>
      {/* Botão "Vamos conversar" */}
      <Button bg="#01547D" color="#ffffff" w="auto" h="32px" mb="20px">
        Vamos conversar
      </Button>
      {/* Formulário */}
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Celular" />
        <textarea placeholder="Mensagem"></textarea>
        <Button bg="#01547D" color="#ffffff" w="auto" h="32px" mt="10px">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default VamosConversar;
