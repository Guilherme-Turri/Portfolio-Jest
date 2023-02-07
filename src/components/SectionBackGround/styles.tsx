import styled,{css} from 'styled-components'

type Props = {
  background: boolean
  fill:boolean
}


export const Container = styled.div<Props>`
${({theme, background, fill}) => css`
  background: ${background? theme.colors.primaryBg : theme.colors.secondaryBg };
  padding: ${theme.sizes.large};
  width: 100%;
  height: ${fill? '100vh' : '100%'};
  `}
`