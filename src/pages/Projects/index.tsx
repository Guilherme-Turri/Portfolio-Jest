import React from 'react'
import { SectionBackground } from '../../components/SectionBackGround'
import * as Styled from './styles'
import mock from './mock'
import { Card } from '../../components/Card'
import { Heading } from '../../components/Heading'

interface ProjectProps  {
  background:boolean,
  fill: boolean
}

export const Projects:React.FC<ProjectProps> = ({background, fill}) => {
  return (
    <SectionBackground background={background} fill={fill}> 
     <Styled.Container>
      <Heading as='h2' uppercase={false} colorDark={!background}>Projetos</Heading>
     <Styled.CardGrid>
     {mock.map((el) =>(
        <Card title={el.title} description={el.description}  href={el.href} target={el.target}/>
       ))}
     </Styled.CardGrid> 
     </Styled.Container>
     </SectionBackground>
        
  )
}
