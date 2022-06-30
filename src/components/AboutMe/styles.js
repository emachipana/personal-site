import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  max-width: 580px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 24px;
  color: ${({theme}) => colors[theme].font};
  text-align: center;
`;
