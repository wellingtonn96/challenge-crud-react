import React from 'react';
import { FiArrowUp, FiBell, FiHome, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from './sidebar.style';

const SideBar: React.FC = () => {
  return (
    <Container>
      <Link to="/" className="select">
        <FiHome size={18} />
      </Link>
      <Link to="/">
        <FiHeart size={18} />
      </Link>
      <div style={{ flex: 1 }} />
      <Link to="/" style={{ margin: 0 }}>
        <FiBell size={18} />
      </Link>
    </Container>
  );
};

export default SideBar;
