import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px 40px;

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
