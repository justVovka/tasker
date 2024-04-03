export enum TaskStatus {
  PLANNED = 'PLANNED',
  IN_PROCESS = 'IN_PROCESS',
  DONE = 'DONE'
}

export const StatusForSelect = {
  [TaskStatus.PLANNED.toString()]: 'Planned',
  [TaskStatus.IN_PROCESS.toString()]: 'In Process',
  [TaskStatus.DONE.toString()]: 'Done'
};

export const StatusForColumns = {
  [TaskStatus.PLANNED]: '🙃 Planned',
  [TaskStatus.IN_PROCESS]: '😵 In Process',
  [TaskStatus.DONE]: '😎 Done'
};
