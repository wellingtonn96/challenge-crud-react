import React, { InputHTMLAttributes, useState, useCallback } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<IInputProps> = ({ name, icon: Icon, children }) => {
  return (
    <Container isFilled={false} isFocused={false}>
      {Icon && <Icon size={20} />}
      {children}
    </Container>
  );
};

export default Input;
