import { TaskStatus } from '../../constants';

export interface IBoardColumnProps {
  title: string;
  tasks: TaskList;
  columnType: TaskStatus;
  onDropHandler: (e: React.DragEvent) => void;
  onDragOverHandler: (e: React.DragEvent) => void;
}
