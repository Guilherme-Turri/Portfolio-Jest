import React from 'react'
import { Footer } from '../pages/Footer'
import { About } from '../pages/About'
import { Connect } from '../pages/Connect'
import { Experience } from '../pages/Experience'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import * as Styled from './styles'
export const App = () => {
  return (
  <Styled.Container>
    <Home background={false} fill={true}/>
    <About background={true} fill={false}/>
    <Projects background={false} fill={false}/>
    <Experience background={true} fill={false} />
    <Connect background={false} fill={false} />
    <Footer background={true} fill={false} />
  </Styled.Container>
 )
}
