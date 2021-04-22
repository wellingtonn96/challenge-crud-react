import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  background-color: #ffffffa1; /* fallback for old browsers */
  height: 100%;
  display: flex;
  padding-left: 90px;

  > div {
    width: 100%;

    > div.input-container {
      display: flex;
      width: 100%;
      padding: 30px 40px;

      input {
        background-color: #ffffffa1;
        width: 100%;
        height: 50px;
        padding: 0 60px 0 20px;
        border-radius: 50px;
        border: 0;
      }

      button {
        position: absolute;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #ffff;
        border: 0;
      }
    }
  }
`;
