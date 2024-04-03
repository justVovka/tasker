import styled from 'styled-components';
import { BorderStyle, PrimaryColor } from '../../../styles/styleConstants';

export const InputStyled = styled.input`
  padding: 0.5rem;
  outline: none;
  border: none;
  border-bottom: ${BorderStyle};
  color: ${PrimaryColor};
`;

export const LabelStyled = styled.label`
  display: inline-block;
  width: 3.5rem;
  color: ${PrimaryColor};
`;
