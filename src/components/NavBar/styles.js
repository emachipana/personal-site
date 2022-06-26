import styled from '@emotion/styled'
import { colors } from '../../styles';

export const Container = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  transition: .3s ease-in;
  overflow: hidden;
  background-color: ${({ isMove }) => isMove ? colors.gray.move : "transparent"};
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
    color: white;
    transition: 0.2s ease-in;
  }
  .link:hover {
    color: ${colors.red}
  }
  .logo {
    font-size: 24px;
    color: ${colors.white};
    font-weight: 500;
  }
  .nav-item {
    padding: 1rem;
    font-weight: 500;
  }
  .hamburger {
    display: none;
  }

  @media screen and (max-width:940px) {
    background-color: ${({ isOpen, isMove }) => (isOpen || isMove) ? colors.gray.move : "transparent"};

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
        background-color: rgba(0,0,0,.9);
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
