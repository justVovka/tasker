import { ReactNode } from 'react';

export interface IWrapperModalProps {
  children: ReactNode;
  isVisible: boolean;
  title: string;
  hide: () => void;
}
