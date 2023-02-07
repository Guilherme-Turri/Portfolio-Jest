import React from 'react'
import * as Styled from './styles'
import {TextComponent} from '../TextComponent'

export interface FooterProps {
  children: React.ReactNode
}

export const Footer:React.FC<FooterProps> = ({children}) => {
  return (
    <Styled.Container>
      <TextComponent size='small'>{children}</TextComponent>
    </Styled.Container>
  )
}
