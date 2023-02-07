import React from 'react'
import * as Styled from './styles'
export interface CircleProp {
  color:string
}
export const Circles:React.FC<CircleProp> = ({color}) => {
  return (
    <Styled.Container color={color}></Styled.Container>
  )
}
