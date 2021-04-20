import React from 'react';

import { FiCheckSquare } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Form } from './styles';
import Modal from '../Modal';
import InputContainer from '../Input';
import api from '../../services/api';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface ICreateFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAddFood: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const history = useHistory();

  const { register, handleSubmit } = useForm<ICreateFoodData>();
  const onSubmit = handleSubmit(async data => {
    try {
      await api.post('/foods', data);

      history.push('/');

      setIsOpen();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={onSubmit}>
        <h1>Novo Prato</h1>
        <InputContainer>
          <input
            name="image"
            id="image"
            placeholder="Cole o link aqui"
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <input
            name="name"
            id="name"
            placeholder="Ex: Moda Italiana"
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <input
            name="price"
            id="price"
            placeholder="Ex: 19.90"
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <input
            name="description"
            id="description"
            placeholder="Descrição"
            ref={register}
          />
        </InputContainer>
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
