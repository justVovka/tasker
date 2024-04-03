import { ReactElement } from 'react';
import { TaskCardWrapperDraggable } from './styled';
import { ITaskCard } from './types';
import { TaskStatus } from '../../constants';
import { deleteTask, setEditableTask } from '../../redux/reducers/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import useModal from '../../hooks/useModal';
import { WrapperModal } from '../modals/WrapperModal/WrapperModal';
import { EditTaskCardModalContent } from '../modals/EditTaskCardModal/EditTaskCardModal';
import { selectEditableTask } from '../../redux/selectors/taskSelectors';
import { Button } from '../UI/Buttons/Button';
import { ButtonGroup } from '../UI/Buttons/ButtonGroup';

export function TaskCard({ task }: ITaskCard): ReactElement {
  const { isShowing, toggle } = useModal();

  const editableTask = useAppSelector(selectEditableTask);
  const dispatch = useAppDispatch();

  function onHandleDrag(e: React.DragEvent, taskId: string, taskStatus: TaskStatus) {
    e.dataTransfer.setData(
      'task',
      JSON.stringify({
        id: taskId,
        status: taskStatus
      })
    );
  }

  function onEditTaskHandler() {
    toggle();
    dispatch(setEditableTask(task));
  }

  function onDeleteTaskHandler() {
    toggle();
    dispatch(deleteTask(task));
  }

  return (
    <>
      <TaskCardWrapperDraggable
        draggable
        onDragStart={(e) => onHandleDrag(e, task.id, task.status)}
      >
        <span>{task.title}</span>
        <ButtonGroup>
          <Button onClick={onEditTaskHandler}>✎</Button>
          <Button onClick={onDeleteTaskHandler}>🗑</Button>
        </ButtonGroup>
      </TaskCardWrapperDraggable>
      <WrapperModal isVisible={isShowing} title={task.title} hide={toggle}>
        {editableTask && <EditTaskCardModalContent task={editableTask} />}
      </WrapperModal>
    </>
  );
}
