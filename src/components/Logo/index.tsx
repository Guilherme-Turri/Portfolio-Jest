import React from 'react'
import * as Styled from './styles'

interface LogoProps{
  src:string
}
export const Logo:React.FC<LogoProps> = ({src}) => {
  return (
    <Styled.Container src={src} />
  )
}