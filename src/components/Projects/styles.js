import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.red};
  text-align: center;
`;

export const Section = styled.div`
  max-width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: ${({ color }) => color};
  color: ${colors.white};
`;
