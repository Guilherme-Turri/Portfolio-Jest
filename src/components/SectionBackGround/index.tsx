import React from 'react'
import * as Styled from './styles'

interface BackGroundProps {
  children: React.ReactNode;
  background:boolean;
  fill: boolean
}


export const SectionBackground:React.FC<BackGroundProps> = ({children, background, fill}) => {
  return (
    <Styled.Container fill={fill} background={background}>
      {children}
      </Styled.Container>
  )
}
