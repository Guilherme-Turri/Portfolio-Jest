import {renderTheme} from '../../styles/render-theme'
import {SectionBackground} from './'
import { screen } from '@testing-library/react'


describe('<SectionBackGround/>', ()=> {
  test('render on screen with false background and fill true', () =>{
    renderTheme(<SectionBackground fill={true} background={false}>
      <h1>Children</h1>
    </SectionBackground>)  
    expect(screen.getByRole('heading')).toBeInTheDocument();
  })
  test('render on screen with true background and fill false', () =>{
        renderTheme(<SectionBackground fill={false} background={true}>
        <h1>Children</h1>
      </SectionBackground>)  
      expect(screen.getByRole('heading')).toBeInTheDocument();
    })
})