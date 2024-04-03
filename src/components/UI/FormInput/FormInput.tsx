import { ReactElement } from 'react';
import { IFormInpitProps } from './types';
import { InputStyled, LabelStyled } from './styled';

export function FormInput({ label, value, onChange }: IFormInpitProps): ReactElement {
  return (
    <>
      {label && <LabelStyled>{label}: </LabelStyled>}
      <InputStyled value={value} onChange={onChange} />
    </>
  );
}
