import styled from 'styled-components';
import { LightColor, PrimaryColor } from '../../../styles/styleConstants';

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;
  color: ${PrimaryColor};

  &:hover {
    background-color: ${LightColor};
  }

  &:active {
    box-shadow: inset 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    color: #959595;
    background-color: ${PrimaryColor};
  }
`;
