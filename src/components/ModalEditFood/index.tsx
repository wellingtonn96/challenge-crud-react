import React, { useEffect } from 'react';

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
  food: IFoodPlate | null;
}

const ModalAddFood: React.FC<IModalProps> = ({ isOpen, setIsOpen, food }) => {
  const history = useHistory();

  const { register, handleSubmit, setValue } = useForm<ICreateFoodData>({
    defaultValues: {
      name: food?.name,
      description: food?.description,
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      console.log('[data edit', data);

      await api.put(`/foods/${food?.id}`, data);

      setIsOpen();
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    setValue('name', 'Bill');
  }, [setValue]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={onSubmit}>
        <h1>Editar Prato</h1>
        <InputContainer>
          <input
            name="image"
            id="image"
            placeholder="Cole o link aqui"
            defaultValue={food?.image}
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <input
            name="name"
            id="name"
            defaultValue={food?.name}
            placeholder="Ex: Moda Italiana"
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <input
            name="price"
            id="price"
            defaultValue={food?.price}
            placeholder="Ex: 19.90"
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <input
            name="description"
            id="description"
            defaultValue={food?.description}
            placeholder="Descrição"
            ref={register()}
          />
        </InputContainer>
        <button type="submit" data-testid="add-food-button">
          <p className="text">Editar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
