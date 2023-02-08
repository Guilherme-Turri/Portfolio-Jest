import styled,{css} from 'styled-components'

interface BackGroundProps {
  background:boolean,
  fill:boolean

}

export const Container = styled.div<BackGroundProps>`
${({theme, background,fill }) => css`
  background: ${background? theme.colors.primaryBg : theme.colors.secondaryBg };
  padding: ${theme.sizes.large};
  height: ${fill? '100vh' : '100%' };;
  `}
`