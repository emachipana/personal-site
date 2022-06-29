import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../styles";

export const MainContainer = styled.div`
  margin: 0 1rem;
`;

export const LinkTo = styled(Link)`
  font-size: 45px;
  color: ${colors.red};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
