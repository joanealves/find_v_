import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import meninoFind from '../assets/meninoFind.png';

const VamosConversar: React.FC = () => {
  return (
    <Box display="flex" alignItems="flex-start" justifyContent="flex-start" mt="20px">
      {/* Aqui vai a imagem */}
      <Box mr="20px">
        <img src={meninoFind} alt="Imagem" />
      </Box>
      {/* Botão "Vamos conversar" */}
      <Button bg="#01547D" color="#ffffff" w="120px" h="32px" position="relative" top="30px">
        Vamos conversar
      </Button>
      {/* Texto abaixo do botão */}
      <Box mt="48px">
        <p style={{ fontFamily: 'Roboto', fontSize: '16px', fontWeight: 'medium', color: '#323238' }}>
          Aqui colocaremos o texto abaixo do botão.
        </p>
      </Box>
      {/* Formulário */}
      <Box bg="#FFFFFF" w="262px" h="296px" ml="20px" p="20px" borderRadius="10px" border="1px solid #F0F0F0" marginRight="60px">
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <input type="text" placeholder="Nome Completo" style={{ width: '206px', height: '28px', marginBottom: '13px', borderRadius: '6px', fontFamily: 'Inter', fontSize: '15px', color: '#637381', padding: '6px', border: '1px solid #F0F0F0', background: 'transparent' }} />
          <input type="email" placeholder="Email" style={{ width: '206px', height: '28px', marginBottom: '13px', borderRadius: '6px', fontFamily: 'Inter', fontSize: '15px', color: '#637381', padding: '6px', border: '1px solid #F0F0F0', background: 'transparent' }} />
          <input type="tel" placeholder="Celular" style={{ width: '206px', height: '28px', marginBottom: '13px', borderRadius: '6px', fontFamily: 'Inter', fontSize: '15px', color: '#637381', padding: '6px', border: '1px solid #F0F0F0', background: 'transparent' }} />
          <textarea placeholder="Mensagem" style={{ width: '206px', height: '72px', marginBottom: '13px', borderRadius: '6px', fontFamily: 'Inter', fontSize: '15px', color: '#637381', padding: '6px', border: '1px solid #F0F0F0', background: 'transparent' }}></textarea>
          <Button bg="#03A9FC" color="#FFFFFF" w="206px" h="32px" fontSize="16px">
            Enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default VamosConversar;
