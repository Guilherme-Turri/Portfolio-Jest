import React from 'react'
import * as Styled from './styles'

type Props = {
  children: React.ReactNode
  background:boolean;
  fill:boolean
}


export const SectionBackground:React.FC<Props> = ({children, background, fill}) => {
  return (
    <Styled.Container fill={fill} background={background}>
      {children}
      </Styled.Container>
  )
}
