import { ReactElement } from 'react';
import { ISelectProps } from './types';
import { getCapitaliseWord } from '../../../helpers/textHelper';
import { LabelStyled, Select } from './styled';

export function FormSelect({ label, value, options, onChange }: ISelectProps): ReactElement {
  return (
    <>
      {label && <LabelStyled>{label}: </LabelStyled>}
      <Select value={value} onChange={onChange}>
        {Object.entries(options).map((option) => (
          <option key={option[0]} value={option[0]}>
            {getCapitaliseWord(option[1])}
          </option>
        ))}
      </Select>
    </>
  );
}
