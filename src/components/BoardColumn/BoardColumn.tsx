import { ReactElement } from 'react';
import { BoardItem, BoardItemHead } from '../Blocks/BoardItem';
import { TaskCard } from '../TaskCard/TaskCard';
import { IBoardColumnProps } from './types';
import { TaskStatus } from '../../constants';
import { AddNewTask } from '../AddNewTask/AddNewTask';
import { BoardColumnHOC } from './BoardColumnHOC';

function BoardColumn({
  title,
  tasks,
  columnType,
  onDropHandler,
  onDragOverHandler
}: IBoardColumnProps): ReactElement {
  return (
    <BoardItem onDrop={onDropHandler} onDragOver={onDragOverHandler}>
      <BoardItemHead $columnType={columnType}>
        <h3>{title}:</h3>
      </BoardItemHead>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {columnType === TaskStatus.PLANNED && <AddNewTask />}
      </div>
    </BoardItem>
  );
}

export default BoardColumnHOC(BoardColumn);
