import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => colors[theme].footer};
  padding: 1rem;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  align-items: center;
  transition: .3s ease-in;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  color: ${colors.card};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 500px;
  flex-wrap: wrap;
`;

export const Icon = styled.a`
  border-radius: 8px;
  color: ${colors.gray.secondary};
  width: 50px;
  height: 50px;
  background-color: ${colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${colors.white};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${colors.card};
`;