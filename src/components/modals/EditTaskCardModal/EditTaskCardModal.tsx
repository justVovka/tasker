import React, { ReactElement, useState } from 'react';
import { StatusForSelect } from '../../../constants';
import { IEditTaskCardModalContentProps } from './types';
import { useAppDispatch } from '../../../redux/hooks';
import { changeTask } from '../../../redux/reducers/tasksSlice';
import { FormInput } from '../../UI/FormInput/FormInput';
import { Button } from '../../UI/Buttons/Button';
import { FormSelect } from '../../UI/FormSelect/FormSelect';

export function EditTaskCardModalContent({ task }: IEditTaskCardModalContentProps): ReactElement {
  const [editableTask, setEditableTask] = useState<Task>(task);

  const dispatch = useAppDispatch();

  function onHandleChange(key: 'title' | 'status') {
    return key === 'title'
      ? function (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
          setEditableTask({
            ...editableTask,
            title: event.target.value
          });
        }
      : function (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
          setEditableTask({
            ...editableTask,
            status: event.target.value
          });
        };
  }

  function onHandleChangeTask() {
    if (editableTask.title.trim().length !== 0) {
      dispatch(changeTask(editableTask));
    }
  }

  return (
    <>
      <p>
        <FormInput label="task" value={editableTask.title} onChange={onHandleChange('title')} />
      </p>
      <p>
        <FormSelect
          label="Статус"
          value={editableTask.status}
          options={StatusForSelect}
          onChange={onHandleChange('status')}
        />
      </p>
      <Button onClick={onHandleChangeTask}>Change</Button>
    </>
  );
}
