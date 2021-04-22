import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

interface IHeaderProps {
  openModal: () => void;
}

// ajustar header, mudar estilo do botão, logo, e background
const ButtomAddMoreFood: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <div style={{ flex: 1 }} />
    <button type="button" onClick={openModal}>
      <div className="text">Novo prato</div>
      <div className="icon">
        <FiPlusSquare size={24} />
      </div>
    </button>
  </Container>
);

export default ButtomAddMoreFood;
