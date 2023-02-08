import { screen } from '@testing-library/react'
import {renderTheme} from '../../styles/render-theme'
import {Logo} from '.'
const src ='./logo.svg'
describe('<Logo/>', () => {
  test('should render on screen', ()=> {
    renderTheme(<Logo src={src}/>)
    expect(screen.getByRole('img')).toHaveAttribute('src', src);
  })
 
})