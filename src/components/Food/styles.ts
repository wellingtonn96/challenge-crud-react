import styled, { css } from 'styled-components';

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  width: 300px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  height: 350px;
  flex-direction: column;
  margin: 20px;
  ${props =>
    !props.available &&
    css`
      opacity: 0.5;
    `}
  border-radius: 50px;
  margin-top: 150px;

  > div {
    background-color: #ffffff;
    position: absolute;
    top: -40%;
    left: 50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }

  section.body {
    padding: 25px;
    flex-grow: 1;

    h2 {
      text-align: center;
      margin-top: 50px;
      font-size: 20px;
      font-weight: bold;
      color: #4d3e3d;
    }

    p {
      color: #4d3e3d;
      font-size: 16px;
      margin-top: 16px;
    }
  }

  section.footer {
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #0bd487;

      b {
        font-weight: 600;
      }
    }

    p {
      color: #4d3e3d;
      font-size: 16px;
      margin-top: 16px;
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      div.icon-container {
        display: flex;

        button {
          background: #fff;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
          padding: 10px;
          border-radius: 50%;
          display: flex;
          border: none;
          transition: 0.1s;

          svg {
            color: #4d3e3d;
          }

          & + button {
            margin-left: 6px;
          }
        }
      }

      div.availability-container {
        display: flex;
        align-items: center;

        p {
          font-size: 16px;
          color: #4d3e3d;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 10px;
          margin-left: 12px;

          & input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #c72828;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 16px;

            &:before {
              position: absolute;
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              content: '';
              height: 24px;
              width: 26px;
              left: 0;
              bottom: -7px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 10px;
            }
          }

          input:checked + .slider {
            background-color: #0bd487;
          }

          input:focus + .slider {
            box-shadow: 0 0 1px #2196f3;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(35px);
            -ms-transform: translateX(35px);
            transform: translateX(35px);
          }
        }
      }
    }
  }
`;
