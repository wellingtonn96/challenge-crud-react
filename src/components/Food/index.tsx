import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IProps {
  food: IFoodPlate;
  handleDelete: (id: number) => {};
  handleToogleModal(): void;
}

const Food: React.FC<IProps> = ({
  food,
  handleDelete,
  handleToogleModal,
}: IProps) => {
  const [isAvailable, setIsAvailable] = useState(true);

  async function toggleAvailable(): Promise<void> {
    setIsAvailable(prev => !prev);
  }

  return (
    <>
      <Container available={isAvailable}>
        <div>
          {food.image ? (
            <img src={food.image} alt={food.name} />
          ) : (
            <img
              src="https://pbs.twimg.com/profile_images/583680592119787520/v5l7l24G_400x400.jpg"
              alt={food.name}
            />
          )}
        </div>
        <section className="body">
          <h2>{food.name}</h2>
          <p>{food.description}</p>
        </section>
        <section className="footer">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <p className="price">
              R$ <b>{food.price}</b>
            </p>
            <p style={{ fontWeight: 'bold' }}>
              {isAvailable ? 'Disponível' : 'Indisponível'}
            </p>
          </div>
          <div>
            <div className="icon-container">
              <button
                type="button"
                className="icon"
                onClick={handleToogleModal}
                data-testid={`edit-food-${food.id}`}
              >
                <FiEdit3 size={20} />
              </button>

              <button
                type="button"
                className="icon"
                onClick={() => handleDelete(food.id)}
                data-testid={`remove-food-${food.id}`}
              >
                <FiTrash size={20} />
              </button>
            </div>

            <div className="availability-container">
              <label htmlFor={`available-switch-${food.id}`} className="switch">
                <input
                  id={`available-switch-${food.id}`}
                  type="checkbox"
                  checked={isAvailable}
                  onChange={toggleAvailable}
                  data-testid={`change-status-food-${food.id}`}
                />
                <span className="slider" />
              </label>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Food;
