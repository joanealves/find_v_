import React, { useReducer, ChangeEvent, FormEvent } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import {
  Button,
  Input,
  VStack,
  Box,
  Flex,
  Text,
  Select,
  useToast,
  Divider
} from "@chakra-ui/react";

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: Date | null;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  estado: string;
  cidade: string;
  fotoPerfil: File | null;
  servico: string;
  categoria: string;
  tipo: string;
  observacoes: string;
  experiencia: string;
}

type FormAction = {
  type: 'CHANGE';
  name: keyof FormState;
  value: string | Date | File | null;
};

const initialState: FormState = {
  nome: '',
  email: '',
  telefone: '',
  dataNascimento: null,
  cep: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  estado: '',
  cidade: '',
  fotoPerfil: null,
  servico: '',
  categoria: '',
  tipo: '',
  observacoes: '',
  experiencia: ''
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
};

const FormFornecedor: React.FC = () => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const toast = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = event.target as HTMLInputElement;
    dispatch({
      type: 'CHANGE',
      name: name as keyof FormState,
      value: files && files.length > 0 ? files[0] : value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Cadastro realizado.",
      description: "Seu formulário foi enviado com sucesso.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" gap="4" p="5" align="center">
      <Box width="full" maxWidth="600px" bg="#DDDFE1" p="5" borderRadius="lg">
        <Text fontSize="xl" fontWeight="bold" mb={6} color="#637381">Preencha o Formulário</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input placeholder="Nome" name="nome" value={formData.nome} onChange={handleChange} />
            <Flex gap="4">
              <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
              <PhoneInput
                country={'br'}
                value={formData.telefone}
                onChange={phone => dispatch({ type: 'CHANGE', name: 'telefone', value: phone })}
                containerStyle={{ width: '100%' }}
              />
            </Flex>
            <DatePicker
              selected={formData.dataNascimento}
              onChange={date => dispatch({ type: 'CHANGE', name: 'dataNascimento', value: date })}
              dateFormat="dd/MM/yyyy"
              wrapperClassName="date-picker"
              className="chakra-input css-0"
              placeholderText="Data de Nascimento"
            />
            <Divider />
            <Input placeholder="Código Postal" name="cep" value={formData.cep} onChange={handleChange} />
            <Flex gap="4">
              <Input placeholder="Endereço" name="endereco" value={formData.endereco} onChange={handleChange} flex="1" />
              <Input placeholder="Número" name="numero" value={formData.numero} onChange={handleChange} />
            </Flex>
            <Input placeholder="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} />
            <Input placeholder="Complemento" name="complemento" value={formData.complemento} onChange={handleChange} />
            <Flex gap="4">
              <Input placeholder="Cidade" name="cidade" value={formData.cidade} onChange={handleChange} flex="1" />
              <Input placeholder="Estado" name="estado" value={formData.estado} onChange={handleChange} />
            </Flex>
            <Divider />
            <Button leftIcon={<FaCloudUploadAlt />} as="label" colorScheme="blue">
              Carregar Foto
              <input type="file" name="fotoPerfil" hidden accept="image/*" onChange={handleChange} />
            </Button>
            <Select placeholder="Serviços" name="servico" value={formData.servico} onChange={handleChange}>
            </Select>
            <Flex gap="4">
              <Select placeholder="Categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
              </Select>
              <Select placeholder="Tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
              </Select>
            </Flex>
            <Input placeholder="Observações" name="observacoes" value={formData.observacoes} onChange={handleChange} />
            <Select placeholder="Anos de Experiência" name="experiencia" value={formData.experiencia} onChange={handleChange}>
            </Select>
            <Button type="submit" colorScheme="blue" size="lg" mt={4}>Enviar</Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default FormFornecedor;
