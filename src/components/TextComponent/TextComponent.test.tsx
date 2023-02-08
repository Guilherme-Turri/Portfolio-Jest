import { screen } from '@testing-library/react'
import {renderTheme} from '../../styles/render-theme'
import {TextComponent} from '.'

describe("<TextComponent/>", () => {
  test('Should render on screen with small size', () => {
    renderTheme(<TextComponent size='small'>Teste</TextComponent>)
    const text = screen.getByText('Teste');
    expect(text).toBeInTheDocument()
    
  })
  test('Should render on screen with normal size', () => {
  renderTheme(<TextComponent size='normal'>Teste</TextComponent>)
    const text = screen.getByText('Teste');
    expect(text).toBeInTheDocument()

  })
})