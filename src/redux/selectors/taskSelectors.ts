import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TaskStatus } from '../../constants';

export const selectTasks = (state: RootState) => state.tasks;

export const selectPlannedTasks = createSelector([selectTasks], (tasks) =>
  tasks.tasks.filter((task) => task.status === TaskStatus.PLANNED)
);

export const selectInProcessTasks = createSelector([selectTasks], (tasks) =>
  tasks.tasks.filter((task) => task.status === TaskStatus.IN_PROCESS)
);

export const selectDoneTasks = createSelector([selectTasks], (tasks) =>
  tasks.tasks.filter((task) => task.status === TaskStatus.DONE)
);

export const selectEditableTask = createSelector([selectTasks], (tasks) => tasks.editableTask);
