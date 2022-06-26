import styled from '@emotion/styled'
import { colors } from '../../styles';
import { css } from "@emotion/react";

export const IconStyled = css`
  font-size: 30px;
  cursor: pointer;
`;

export const Container = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  transition: .3s ease-in;
  overflow: hidden;
  background-color: ${({ isMove, theme }) => isMove ? colors[theme].move : "transparent"};
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px; 
    height: 100%;
    padding: 0 1rem;
    margin: 0 auto;
  }
  .nav-menu {
    list-style: none;
    display: flex;
  }
  .link {
    font-size: 18px;
    color: ${({theme}) => colors[theme].font};
    transition: 0.2s ease-in;
    font-weight: 600;
  }
  .link:hover {
    color: ${colors.red}
  }
  .logo {
    font-size: 24px;
    color: ${({theme}) => colors[theme].font};
    font-weight: 600;
  }
  .nav-item {
    padding: 1rem;
    font-weight: 500;
  }
  .hamburger {
    display: none;
  }

  @media screen and (max-width:940px) {
    background-color: ${({ isOpen, isMove, theme }) => (isOpen || isMove) ? colors[theme].move : "transparent"};

    .navbar {
        width: 95%;
    }
  
    .hamburger {
        display: block;
    }

    .link {
      margin-left: -25px;
    }
  
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 50px;
        align-items: center;
        flex-direction: column;
        background-color: ${({theme}) => colors[theme].move};
        width: 100%;
        height: 100vh;
        z-index: 999;
        transition: .3s;
    }
  
    .nav-menu.active {
        left: 0;
    }
  
    .nav-item {
        margin: 1.5rem 0;
    }
  }
`;

