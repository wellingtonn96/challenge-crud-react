import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import api from '../../services/api';

import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';

import { FoodsContainer } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [food, setFood] = useState<IFoodPlate | null>(null);
  const [editingFood, setEditingFood] = useState<IFoodPlate>({} as IFoodPlate);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  async function handleDeleteFood(id: number): Promise<void> {
    try {
      await api.delete(`/foods/${id}`);

      setFoods(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
    !editModalOpen && setFood(null);
  }

  function handleEditPlate(foodData: IFoodPlate): void {
    setFood(foodData);
  }

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('/foods');

      console.log('executou');

      setFoods(response.data.reverse());
    }

    loadFoods();
  }, [modalOpen, editModalOpen]);

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood isOpen={modalOpen} setIsOpen={toggleModal} />
      <ModalEditFood
        isOpen={editModalOpen}
        food={food}
        setIsOpen={toggleEditModal}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(foodData => (
            <div onClick={() => handleEditPlate(foodData)}>
              <Food
                key={foodData.id}
                food={foodData}
                handleDelete={() => handleDeleteFood(foodData.id)}
                handleToogleModal={toggleEditModal}
              />
            </div>
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
