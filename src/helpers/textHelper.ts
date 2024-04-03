import { StatusForColumns, TaskStatus } from '../constants';

export function getCapitaliseWord(word: string) {
  return word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
}

export function getTitleForColumn(typeColumn: TaskStatus) {
  return StatusForColumns[typeColumn];
}
