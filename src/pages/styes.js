import styled from "@emotion/styled";
import { colors } from "../styles";

export const MainContainer = styled.div`
  margin: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.red};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    margin-top: 10vh;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -3.5rem;
  gap: 2rem;
  max-width: 620px;
  background-color: ${({ theme }) => colors[theme].card};
  border-radius: 15px;
  padding: 1rem;
  @media screen and (max-width: 720px) {
    margin-top: 2rem;
  }
`;

export const FormButton = styled.button`
  width: 30%;
  margin: 0 1rem;
  border: none;
  background-color: ${({ theme }) => colors[theme].font};
  padding: 0.5rem;
  color: ${({ theme }) => colors[theme].card};
  font-size: 17px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: .2s ease-in;
  &:hover {
    box-shadow: 0px 0px 4px 2px ${({ theme }) => colors[theme].font};
  }
`;