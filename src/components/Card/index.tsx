import React from 'react'
import *  as Styled from './styles'
import { Circles } from '../Circles'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'
import { ButtonLink } from '../ButtonLink'

export interface CardProps {
  title:string,
  description:string,
  href:string,
  target:string
}

export const Card:React.FC<CardProps> = ({title, description, href, target}) => {
  return (
    <Styled.Container>
      <Styled.Circles>
        <Circles color={'#ff605c'}></Circles>
        <Circles color={'#ffbd44'}></Circles>
        <Circles color={'#00ca4e'}></Circles>
      </Styled.Circles>
      <Styled.Info>
        <Heading uppercase={false} colorDark={false} as='h3'>{title}</Heading>
        <TextComponent size='small'>{description}</TextComponent>
      </Styled.Info>  
      <Styled.Btn>
        <ButtonLink href={href} target={target}>GITHUB</ButtonLink>
      </Styled.Btn>
    </Styled.Container>
  )
}
