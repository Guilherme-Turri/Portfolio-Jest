import React from 'react'
import * as Styled from './styles'

export interface PropHeading {
  children:React.ReactNode
  uppercase:boolean,
  colorDark: boolean,
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}


export const Heading:React.FC<PropHeading> = ({children, uppercase, colorDark, as='h1'}) => {
  return (

    <Styled.Container colorDark={colorDark} uppercase={uppercase} as={as}>
      {children}
      </Styled.Container>

  )
}
