import { screen } from '@testing-library/react'
import {renderTheme} from '../../styles/render-theme'
import {Heading} from '.'
import { theme } from '../../styles/theme'

describe('<Heading/>', () =>{
  test('It should render on screen as h1', () =>{
    renderTheme(<Heading uppercase={false} colorDark={true} as='h1'>teste</Heading>)
    expect(screen.getByRole('heading', {name: 'teste'}).tagName).toBe('H1')
  })
  test('It should render on screen as h2', () =>{
    renderTheme(<Heading uppercase={false} colorDark={true} as='h2'>teste</Heading>)
    expect(screen.getByRole('heading', {name: 'teste'}).tagName).toBe('H2')
  })
  test('It should render on screen in uppercase', () =>{
    renderTheme(<Heading uppercase={true} colorDark={true} as='h2'>teste</Heading>)
    expect(screen.getByRole('heading', {name:'teste'})).toHaveStyleRule('text-transform', 'uppercase')
  })
  test('It should render on colorDark false', () =>{
    renderTheme(<Heading uppercase={true} colorDark={false} as='h2'>teste</Heading>)
    expect(screen.getByRole('heading', {name:'teste'})).toHaveStyleRule('color', theme.colors.secondaryColor)
  })
  test('It should render on screen as medium size', () =>{
    renderTheme(<Heading uppercase={true} colorDark={true} as='h3'>teste</Heading>)
    expect(screen.getByRole('heading', {name:'teste'})).toHaveStyleRule('font-size', theme.sizes.medium )
  })
 
})