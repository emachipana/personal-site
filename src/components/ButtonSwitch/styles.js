import styled from '@emotion/styled'
import { colors } from '../../styles';

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 22px;
  .check {
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
    background-color: ${({theme}) => colors[theme].font};
    transition: .2s;
    border-radius: 30px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 10%;
    bottom: 7%;
    box-shadow: inset 8px -4px 0px 0px ${({theme}) => colors[theme].move};
    transition: .5s;
  }
  .check:checked + .slider {
    background-color: ${({theme}) => colors[theme].font};
  }
  .check:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 14px -4px 0px 15px #fff000;
  }
`;
