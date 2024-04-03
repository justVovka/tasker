import React, { ReactElement, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddButton } from './styled';
import { useAppDispatch } from '../../redux/hooks';
import { addNewTask } from '../../redux/reducers/tasksSlice';
import { TaskStatus } from '../../constants';
import { AddNewTaskForm } from '../forms/AddNewTaskForm/AddNewTaskForm';

export function AddNewTask(): ReactElement {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const input = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  function toggleForm() {
    setIsFormVisible((prev) => !prev);
  }

  function onHandleChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function addNewTaskHandler() {
    if (newTaskTitle.trim().length !== 0) {
      dispatch(
        addNewTask({
          id: uuidv4(),
          title: newTaskTitle,
          status: TaskStatus.PLANNED
        })
      );
      setNewTaskTitle('');
      toggleForm();
    } else {
      if (input && input.current) {
        input.current.placeholder = 'Please type task title...';
      }
    }
  }

  function onHandleEnterKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addNewTaskHandler();
    }
  }

  return (
    <>
      <div>
        <AddButton disabled={isFormVisible} onClick={toggleForm}>
          +
        </AddButton>
      </div>
      {isFormVisible && (
        <AddNewTaskForm
          newTaskTitle={newTaskTitle}
          onHandleChangeTitle={onHandleChangeTitle}
          onHandleEnterKeyPress={onHandleEnterKeyPress}
          addNewTaskHandler={addNewTaskHandler}
          hideForm={toggleForm}
        />
      )}
    </>
  );
}
