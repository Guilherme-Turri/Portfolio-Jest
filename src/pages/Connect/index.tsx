import React from 'react'
import { Heading } from '../../components/Heading'
import { Logo } from '../../components/Logo'
import * as Styled from './styles'
import LogoSvg from '../../images/svg.svg'
import { SectionBackground } from '../../components/SectionBackGround'
import { TextComponent } from '../../components/TextComponent'


interface ConnectProps {
  background: boolean,
  fill: boolean
}

export const Connect:React.FC<ConnectProps> = ({background, fill}) => {
  return (
    <SectionBackground background={background} fill={fill}>
    <Styled.Container>
      <Heading as='h2' uppercase={false} colorDark={!background}>
        Vamos Conversar
      </Heading>
      <Heading as='h3' uppercase={false} colorDark={!background}>
        Para mais informações, entre em contato comigo
      </Heading>
      <TextComponent size='small'>(12)991272956</TextComponent>
      <TextComponent size='small'>guilhermeturri@icloud.com</TextComponent>
      <TextComponent size='small'>https://www.linkedin.com/in/guilhermetgiovanni/</TextComponent>
      <TextComponent size='small'>https://github.com/Guilherme-Turri/</TextComponent>
      <Styled.Midia> <Logo src={LogoSvg}/></Styled.Midia>
    


  
    </Styled.Container>
    </SectionBackground>
  )
}
