import React from 'react';
import capaUsuario from '../assets/capaUsuario.png';
import FormFornecedor from '../components/FormFornecedor'; // Alterado o nome do componente importado

const CadastroUsuario: React.FC = () => {
  return (
    <>
      <style>{`
        body {
          background-color: #F0F0F0;
          margin: 0;
          padding: 0;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); 
        }
      `}</style>
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <section style={{ width: '100%', height: '100%' }}> 
          <img src={capaUsuario} alt="Foto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
          <div className="overlay"></div> 
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Roboto Flex',
            fontWeight: '800', 
            fontSize: '36px', 
            lineHeight: '1.2', 
            maxWidth: '70%', 
          }}>
            Agora você vai fazer<br />parte da maior rede<br />de serviços.
          </div>
        </section>
      </div>
      <FormFornecedor /> 
    </>
  );
};

export default CadastroUsuario;
