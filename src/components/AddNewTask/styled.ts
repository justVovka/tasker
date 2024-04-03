import styled from 'styled-components';
import { BorderStyle, LightColor, PrimaryColor } from '../../styles/styleConstants';

export const AddButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  border: ${BorderStyle};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
  font-size: 2rem;
  background-color: #fff;
  color: ${PrimaryColor};

  &:hover {
    background-color: ${LightColor};
  }

  &:active {
    box-shadow: inset 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    color: #959595;
  }
`;
