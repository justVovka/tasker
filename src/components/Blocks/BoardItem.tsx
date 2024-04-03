import styled from 'styled-components';
import { TaskStatus } from '../../constants';
import { BorderStyle, TaksStatusColor } from '../../styles/styleConstants';

export const BoardItem = styled.div`
  flex: 1;
  border: ${BorderStyle};
  padding: 0 1rem;
  border-radius: 1rem;
`;

export const BoardItemHead = styled.div<{ $columnType?: TaskStatus }>`
  background-color: ${(props) =>
    props.$columnType === TaskStatus.PLANNED
      ? TaksStatusColor.Planned
      : props.$columnType === TaskStatus.IN_PROCESS
        ? TaksStatusColor.InProcess
        : TaksStatusColor.Done};
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
