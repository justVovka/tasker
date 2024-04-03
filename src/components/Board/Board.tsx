import { ReactElement } from 'react';
import { BordContainer } from '../Blocks/BoardContainer';
import {
  selectDoneTasks,
  selectInProcessTasks,
  selectPlannedTasks
} from '../../redux/selectors/taskSelectors';
import { useAppSelector } from '../../redux/hooks';
import { TaskStatus } from '../../constants';
import BoardColumn from '../BoardColumn/BoardColumn';

export default function Board(): ReactElement {
  const plannedTasks: TaskList = useAppSelector(selectPlannedTasks);
  const inProcessTasks: TaskList = useAppSelector(selectInProcessTasks);
  const doneTasks: TaskList = useAppSelector(selectDoneTasks);

  return (
    <main>
      <BordContainer>
        <BoardColumn tasks={plannedTasks} columnType={TaskStatus.PLANNED} />
        <BoardColumn tasks={inProcessTasks} columnType={TaskStatus.IN_PROCESS} />
        <BoardColumn tasks={doneTasks} columnType={TaskStatus.DONE} />
      </BordContainer>
    </main>
  );
}
