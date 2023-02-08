import React from 'react'
import { Heading } from '../../components/Heading'
import { SectionBackground } from '../../components/SectionBackGround'
import * as Styled from './styles'
import mock from './mock'
import { TextComponent } from '../../components/TextComponent'
import { AccordionItem } from '../../components/AccordionItem'

interface AboutProps{
  background: boolean,
  fill:boolean
}



export const About:React.FC<AboutProps> = ({background, fill}) => {


  return (
    <SectionBackground background={background} fill={fill}>
      <Styled.Container>
        <Heading as='h2' uppercase={false} colorDark={!background}>
          Formação Academica
        </Heading>
        <Heading as='h3' uppercase={false} colorDark={!background}>
          {mock.formacao.curso} <TextComponent size='normal'>{mock.formacao.conclusao}</TextComponent>
        </Heading>
        <Heading as='h2' uppercase={false} colorDark={!background}>
          Cursos
        </Heading>
        {mock.cursos.map((el) =>(
          <AccordionItem topic={el.none} answer={el.instituicao} status={el.conclusao} colorDark={!background}/>
        ))}      
      </Styled.Container>
    </SectionBackground>
  )
}
