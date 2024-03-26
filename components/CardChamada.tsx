import React from 'react';
import backgroundAzul from '../assets/backgroundAzul.png';
import calendario from '../assets/calendario.png';

const CardChamada: React.FC = () => {
  return (
    <section className="chamada" style={{ backgroundImage: `url(${backgroundAzul})`, position: 'relative' }}>
      <div className="content" style={{ marginLeft: '50px', textAlign: 'left', padding: '20px' }}>
        <p style={{ fontSize: '36px', fontFamily: 'Roboto Flex', fontWeight: 'bold', color: '#FFFFFF' }}>É rápido, fácil e seguro!</p>
        <p style={{ fontSize: '18px', fontFamily: 'Roboto Flex', fontWeight: 'bold', color: '#FFFFFF' }}>
          Escolha a categoria, busque pelo profissional.<br />
          Veja as datas disponíveis, realize o pagamento e pronto!
        </p>
        <button style={{ backgroundColor: '#33A9FF', borderRadius: '10px 0 0 10px', color: '#FFFFFF', padding: '10px 20px', marginTop: '20px' }}>Cadastre-se</button>
      </div>
      <div className="side-image" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '50px' }}>
        <img src={calendario} alt="Calendário" style={{ width: '200px', height: 'auto' }} />
      </div>
    </section>
  );
};

export default CardChamada;
