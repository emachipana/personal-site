import styled from "@emotion/styled";
import { colors } from "../../styles";

export const Container = styled.div`
  max-width: 700px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.red};
`;

export const Text = styled.p`
  font-size: 24px;
  color: ${({theme}) => colors[theme].font};
  text-align: center;
`;
