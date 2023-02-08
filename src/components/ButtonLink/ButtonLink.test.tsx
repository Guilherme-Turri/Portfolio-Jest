import {renderTheme} from '../../styles/render-theme'
import {ButtonLink} from '.'
import { fireEvent, screen } from '@testing-library/react'

describe('<Card/>', () =>{
  test('should render on screen', ()=> {
    renderTheme(<ButtonLink href='hppts://www.google.com' target='_blank'>Button</ButtonLink>)
    const button = screen.getByText('Button');
  fireEvent.mouseOver(button);
  expect(button).toHaveStyleRule('transform', 'scale(1.03)',{
    modifier:':hover'
  })
  })
  
})