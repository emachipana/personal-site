import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../../styles";

export const Section = styled.div`
  max-width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Card = styled(Link)`
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-size: 19px;
  font-weight: 700;
  border-radius: 15px;
  background-color: ${({ theme }) => colors[theme].card};
  color: ${({ theme }) => colors[theme].font};
  transition: .3s ease-in;
  &:hover {
    transform: translateY(-5px);
  }
`;
