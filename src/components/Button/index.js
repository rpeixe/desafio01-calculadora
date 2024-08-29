import React from 'react'

import { ButtonContainer } from './styles'

export default function Button({label, onClick, flex}) {
  return (
    <ButtonContainer onClick={onClick} $flex={flex}>
        {label}
    </ButtonContainer>
  )
}
