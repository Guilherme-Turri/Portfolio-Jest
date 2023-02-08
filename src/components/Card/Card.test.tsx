import {renderTheme} from '../../styles/render-theme'
import {Card} from '.'
import mock from './mock'
describe('<Card/>', () =>{
  test('should render on screen', ()=> {
    renderTheme(<Card {...mock}></Card>)
  })
})