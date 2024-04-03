import styled from 'styled-components';
import { BorderStyle, ContainerPadding, LightColor } from '../../styles/styleConstants';

export const TaskCardWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: ${ContainerPadding};
  border: ${BorderStyle};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease-out;
  cursor: pointer;
`;

export const TaskCardWrapperDraggable = styled(TaskCardWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
  }
  &:active {
    border: ${LightColor} dashed 1px;
    transform: rotate(1deg);
    background-color: ${LightColor};
  }
`;
