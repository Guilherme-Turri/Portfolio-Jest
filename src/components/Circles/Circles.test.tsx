import { screen } from '@testing-library/react'
import {renderTheme} from '../../styles/render-theme'
import {Circles} from '.'
const color = 'red'

  describe('<Footer />', () => {
    test('should render on screen', () => {
      renderTheme(<Circles color={color} />)
      const circleContainer = screen.getByTestId('circle-container')
      expect(circleContainer).toHaveStyle(`background: ${color}`)
    })
  })
