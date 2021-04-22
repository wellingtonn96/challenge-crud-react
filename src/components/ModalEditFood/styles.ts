import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    display: flex;
    padding: 10px 40px;
    border: 0;
    border-radius: 50px;
    font-weight: 500;
    color: white;
    background: #0bd487;
    margin-left: 5px;
    box-shadow: rgba(0, 0, 2, 0.2) 0px 5px 35px;

    .icon {
      display: flex;
      border: 0;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
