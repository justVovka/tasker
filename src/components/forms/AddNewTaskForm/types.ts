import React from 'react';

export interface IAddNewTaskFormProps {
  newTaskTitle: string;
  onHandleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleEnterKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  addNewTaskHandler: () => void;
  hideForm: () => void;
}
