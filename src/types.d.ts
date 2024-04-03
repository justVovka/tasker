declare module 'uuid';

declare type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

declare type TaskList = Array<Task>;
