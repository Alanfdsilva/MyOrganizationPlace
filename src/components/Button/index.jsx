import React from 'react';
import * as S from './styles'

function Button({ onClickAction, buttonText }) {
  return (
    <S.Container onClick={onClickAction}>
      {buttonText}
    </S.Container>
  );
}

export default Button;