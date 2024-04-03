import { ReactElement } from 'react';
import { TaskCardWrapper } from '../../TaskCard/styled';
import { Button } from '../../UI/Buttons/Button';
import { ButtonGroup } from '../../UI/Buttons/ButtonGroup';
import { FormInput } from '../../UI/FormInput/FormInput';
import { IAddNewTaskFormProps } from './types';

export function AddNewTaskForm({
  newTaskTitle,
  onHandleChangeTitle,
  onHandleEnterKeyPress,
  addNewTaskHandler,
  hideForm
}: IAddNewTaskFormProps): ReactElement {
  return (
    <TaskCardWrapper>
      <FormInput
        value={newTaskTitle}
        onChange={onHandleChangeTitle}
        onKeyDown={onHandleEnterKeyPress}
      />
      <ButtonGroup>
        <Button onClick={addNewTaskHandler}>✓</Button>
        <Button onClick={hideForm}>✖</Button>
      </ButtonGroup>
    </TaskCardWrapper>
  );
}
