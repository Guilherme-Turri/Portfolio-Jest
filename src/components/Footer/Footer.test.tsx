import { screen } from '@testing-library/react'
import {renderTheme} from '../../styles/render-theme'
import {Footer} from '.'
describe('<Footer/>', () =>{
  test('should render on screen', () =>{
    renderTheme(<Footer>teste</Footer>)
    expect(screen.getByText('teste')).toBeInTheDocument()
  })
})