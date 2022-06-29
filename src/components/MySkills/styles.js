import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  max-width: 720px;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.red};
`;

export const Cards = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 1rem;
  color: ${({ theme }) => colors[theme].font};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background-color: ${({ theme }) => colors[theme].card};
  cursor:pointer;
  transition: .3s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;
