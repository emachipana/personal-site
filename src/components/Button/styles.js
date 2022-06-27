import styled from "@emotion/styled";
import { colors, font } from "../../styles";

export const Container = styled.a`
  max-widht: 120px;
  max-height: 120px;
  padding: 0.7rem;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid ${colors.red};
  color: ${colors.red};
  background-color: transparent;
  font-family: ${font.primary};
  font-size: 18px;
  font-weight: 700;
  transition: .3s ease-in;
  &:hover {
    background-color: ${colors.red};
    color: ${colors.white};
  }
`;
