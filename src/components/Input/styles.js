import styled from "@emotion/styled";
import { colors } from "../../styles";

export const StyledInput = styled.input`
  background-color: ${colors.white};
  outline: none;
  font-size: 15px;
  line-height: 22px;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  border-radius: 8px;
  color: ${ colors.gray.secondary };
  border: 1px solid ${ colors.gray.secondary };
  transition: .1s ease-in;
  position: relative;
  padding-inline-start: 2.5rem;
  padding-inline-end: 1rem;
  &:focus {
    border: 1px solid ${ colors.red };
    box-shadow: 0px 0px 3px 2px ${colors.red};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${colors.gray.secondary}
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  color: ${({ theme }) => colors[theme].font};
`;

export const Container = styled.div`
  position: relative;
`;