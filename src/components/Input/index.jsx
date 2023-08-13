import React from 'react';
import * as S from './styles'

function Input({ label, type, value, onChange }) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input type={type} value={value} onChange={onChange} />
    </S.Container>
  );
}

export default Input;