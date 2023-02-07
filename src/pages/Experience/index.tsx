import React from 'react'
import { Heading } from '../../components/Heading';
import { SectionBackground } from '../../components/SectionBackGround'
import * as Styled from './styles'
import mock from './mock'
import { TextComponent } from '../../components/TextComponent';

interface ExperienceProps{
  background:boolean;
  fill:boolean
}


export const Experience:React.FC<ExperienceProps> = ({background, fill}) => {
  return (
    <SectionBackground background={background} fill={fill}>
      <Styled.Container>
      <Heading as='h2' uppercase={false} colorDark={!background}>Experiencia</Heading>
      <Styled.Jobs>
        {mock.map((el) =>(
               <><Heading as='h3' uppercase={false} colorDark={!background}>{el.local}</Heading>
          <TextComponent size='small'>{el.cargo} - {el.tempo}</TextComponent></>
            ))}
      </Styled.Jobs>
      </Styled.Container>
    </SectionBackground>
  )
}
