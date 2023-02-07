import React from 'react'
import { Heading } from '../../components/Heading'
import { SectionBackground } from '../../components/SectionBackGround'
import * as Styled from './styles'
import mock from './mock'
import { TextComponent } from '../../components/TextComponent'
import {Logo} from '../../components/Logo'
import LogoSvg from '../../images/svg.svg'

interface HomeProps {
  background: boolean,
  fill:boolean
}

export const Home: React.FC<HomeProps> = ({background, fill}) => {

  return (
    <SectionBackground background={background} fill={fill}>
      <Styled.Container>
        <Styled.Text>
          <TextComponent size='normal'>{mock.greeting}</TextComponent>
          <Heading uppercase={true} as='h1' colorDark={!background}>{mock.name}</Heading>
          <TextComponent size='normal'>{mock.role}</TextComponent>
          <TextComponent size={'small'}>
            {mock.stack.map((item, index) => (
            index === mock.stack.length - 1 ? item : `${item}, `
            ))}.
          </TextComponent>
        </Styled.Text>
        <Styled.Midia> <Logo src={LogoSvg}/></Styled.Midia>
    </Styled.Container>
    </SectionBackground>

  )
}
