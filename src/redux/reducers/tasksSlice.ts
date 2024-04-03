import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskStatus } from '../../constants';

interface ITaskState {
  tasks: TaskList;
  editableTask: {
    id: string;
    title: string;
    status: string;
  } | null;
}

const initialState: ITaskState = {
  tasks: [
    {
      id: '276410ff-f198-4375-b4d7-fbc66b4c75a9',
      title: 'Выучить React',
      status: TaskStatus.PLANNED
    },
    {
      id: 'fe66197a-b074-49cc-a103-75c8968b2988',
      title: 'Прочесть книгу',
      status: TaskStatus.IN_PROCESS
    },
    {
      id: 'afbbcb76-fbac-437f-928d-b088d1faf780',
      title: 'Вымыть посуду',
      status: TaskStatus.DONE
    }
  ],
  editableTask: null
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setEditableTask: (state, { payload }: PayloadAction<Task | null>) => {
      state.editableTask = payload
    },
    addNewTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks = [...state.tasks, payload]
    },
    changeTitle: (state, { payload }: PayloadAction<Task>) => {
      state.tasks = [
        ...state.tasks.filter((task) => task.id !== payload.id),
        {
          ...payload,
          title: payload.title
        }
      ]
    },
    changeStatus: (state, { payload }: PayloadAction<Task>) => {
      state.tasks = [
        ...state.tasks.filter((task) => task.id !== payload.id),
        {
          ...payload,
          title: state.tasks.filter((task) => task.id === payload.id)[0].title
        }
      ]
    },
    changeTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks = [...state.tasks.filter((task) => task.id !== payload.id), payload]
    },
    deleteTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks = [...state.tasks.filter((task) => task.id !== payload.id)]
    }
  }
});

export const { setEditableTask, addNewTask, changeTitle, changeStatus, changeTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
