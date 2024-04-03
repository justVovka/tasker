import React, { FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { TaskStatus } from '../../constants';
import { changeStatus } from '../../redux/reducers/tasksSlice';
import { IBoardColumnProps } from './types';
import { getTitleForColumn } from '../../helpers/textHelper';

interface IBoardColumnHOCProps {
  tasks: TaskList;
  columnType: TaskStatus;
}

export const BoardColumnHOC = (OriginalComponent: FC<IBoardColumnProps>) => {
  function Column({ tasks, columnType }: IBoardColumnHOCProps) {
    const dispatch = useAppDispatch();

    function onHandleDrop(e: React.DragEvent) {
      const task: string = e.dataTransfer.getData('task');
      const targetTask: Task = JSON.parse(task);
      dispatch(
        changeStatus({
          ...targetTask,
          status: columnType
        })
      );
    }

    function onHandleDragOver(e: React.DragEvent) {
      e.dataTransfer.clearData();
      e.preventDefault();
    }

    return (
      <OriginalComponent
        title={getTitleForColumn(columnType)}
        tasks={tasks}
        columnType={columnType}
        onDropHandler={onHandleDrop}
        onDragOverHandler={onHandleDragOver}
      />
    );
  }

  return Column;
};
