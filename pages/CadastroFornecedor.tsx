import React from 'react';
import capaForm from '../assets/capaForm.jpg';
import FormFornecedor from '../components/FormFornecedor'; // Importar o componente FormFornecedor

const CadastroFornecedor: React.FC = () => {
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
          background-color: rgba(0, 0, 0, 0.7); /* Adicionando opacidade à imagem de fundo */
        }
        .overlay-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 50%;
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          line-height: 1.2;
        }
      `}</style>
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <section style={{ width: '100%', height: '100%' }}> 
          <img src={capaForm} alt="Foto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> 
          <div className="overlay"></div> {/* Sobreposição com opacidade */}
          <div className="overlay-text">
            Agora você vai fazer<br />parte da maior rede<br />de serviços.
          </div>
        </section>
      </div>
      <FormFornecedor /> 
    </>
  );
};

export default CadastroFornecedor;
