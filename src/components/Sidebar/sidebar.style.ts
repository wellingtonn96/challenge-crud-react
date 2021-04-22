import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffff;
  border-radius: 0 50px 50px 0;
  width: 90px;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  a {
    text-decoration: none;
    color: #111111;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fffaea;
    margin-bottom: 20px;

    &:hover {
      background-color: #f05053;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px;
      color: #ffff;
    }
  }

  a.select {
    background-color: #f05053;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px;
    color: #ffff;
  }
`;
