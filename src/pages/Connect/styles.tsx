import styled, {css} from 'styled-components'
import {Container as TextComponent} from '../../components/TextComponent/styles'
export const Container = styled.section`
${({theme}) => css`
${TextComponent}{
    color:${theme.colors.tertiaryColor};
    font-family: ${theme.fonts.secondaryFont}
  }
`
}

`

export const Midia = styled.section`
  display: flex;
  flex-direction: row;
  height: 100px;

`