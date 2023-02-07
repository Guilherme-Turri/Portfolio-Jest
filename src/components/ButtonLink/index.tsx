import React from 'react'
import * as Styled from './styles'

type PropsButtonLink ={
  children:React.ReactNode,
  href:string,
  target:string
}

export const ButtonLink:React.FC<PropsButtonLink> = ({children, href ,target}) => {
  return (

    <Styled.Container target={target} href={href}>
      {children}
    </Styled.Container>
 
  )
}
