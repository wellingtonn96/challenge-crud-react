import styled from 'styled-components';

import FoodImg from '../../assets/img_5.jpg';

export const Container = styled.div`
  background-image: url('${FoodImg}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    padding: 60px 0;
    height: 100%;
    background-color: #633728d0;
  }

  header {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      img {
        max-width: 100%;
        height: 150px;
        display: block;
        margin: 0 auto;
      }
    }

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }

          @media (max-width: 760px) {
            height: 60px;
            width: 150px;
          }
        }
      }
    }
  }
`;
