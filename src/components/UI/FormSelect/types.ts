export interface ISelectProps {
  label?: string;
  value: string;
  options: { [x: string]: string };
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
