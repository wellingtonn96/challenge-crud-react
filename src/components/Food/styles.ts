import styled, { css } from 'styled-components';

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  background: #ffffff;
  border-radius: 8px;
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
  height: 550px;

  margin: 20px;

  header {
    background: #8a0000;
    height: 350px;
    border-radius: 8px 8px 0px 0px;
    height: 250px;
    overflow: hidden;
    transition: 0.3s opacity;
    align-items: stretch;
    text-align: center;

    ${props =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      height: 250px;
      width: 350px;
      display: block;
      margin: 0 auto;
      pointer-events: none;
      user-select: none;
    }
  }

  section.body {
    padding: 30px;
    flex-grow: 1;

    h2 {
      color: #4d3e3d;
    }

    p {
      color: #4d3e3d;

      margin-top: 16px;
    }

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: #39b100;

      b {
        font-weight: 600;
      }
    }
  }

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;
    background: #ebcdc1;
    border-radius: 0px 0px 8px 8px;

    div.icon-container {
      display: flex;

      button {
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
        padding: 10px;
        border-radius: 8px;
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
          background-color: #39b100;
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
`;
