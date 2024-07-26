import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const FormFornecedor: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    email: '',
    telefone: '',
    dataFundacao: null,
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    fotoPerfil: null,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | Date, name?: string) => {
    if (name) {
      setFormData(prevState => ({
        ...prevState,
        [name]: e,
      }));
    } else {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        fotoPerfil: file,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    setModalIsOpen(true);
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '24px', fontFamily: 'Roboto', fontWeight: '600', fontSize: '24px', color: '#637381' }}>
        Preencha o formulário 
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', marginTop: '78px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', gap: '20px' }}>
          <div style={{ background: '#FFFFF', height: '543px', borderRadius: '16px', padding: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: '20px', marginLeft: '30px', marginRight: '30px' }}>
              <label htmlFor="nomeEmpresa" style={{ fontSize: '18px', fontWeight: 'light', color: '#464A53', marginBottom: '10px', display: 'block' }}>Nome da Empresa</label>
              <input
                type="text"
                id="nomeEmpresa"
                name="nomeEmpresa"
                value={formData.nomeEmpresa}
                onChange={handleChange}
                style={{ width: '100%', height: '54px', fontSize: '16px', color: '#ABAFB3', borderRadius: '4px', border: '1px solid #ABAFB3', marginTop: '6px', background: 'transparent', padding: '0 15px' }}
                placeholder="Nome da empresa"
              />
            </div>
            {/* Rest of the form fields */}
          </div>

          <button
            type="submit"
            style={{ fontSize: '18px', fontWeight: 'bold', background: '#03A9FC', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', width: '152px', height: '32px', alignSelf: 'center', marginTop: '30px' }}
          >
            Enviar
          </button>
        </div>
      </form>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ModalOverlay />
        <ModalContent bg="#FFFFFF" w="600px" h="auto" textAlign="center" borderRadius="10px" display="flex" alignItems="center" justifyContent="center">
          <ModalHeader color="#637381" fontFamily="Roboto" fontWeight="semibold" fontSize="24px">Confirmação de Cadastro</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="#637381" fontFamily="Roboto" fontWeight="semibold" fontSize="24px">
            <p>Recebemos o seu cadastro!</p>
            <p>Estamos felizes em receber o seu cadastro!</p>
            <p>Enviamos um email, com o seu acesso!</p>
            <p>Basta confirmar e começar a contratar os melhores profissionais!</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setModalIsOpen(false)}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormFornecedor;
