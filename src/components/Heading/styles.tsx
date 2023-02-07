import styled, {css} from 'styled-components'
import {PropHeading} from '.'

export const Container = styled.h1<PropHeading>`
${({theme,uppercase, colorDark, as}) => css`
text-transform: ${uppercase? 'uppercase' : 'none'};
color: ${colorDark? theme.colors.primaryColor : theme.colors.secondaryColor};
font-size: ${as === 'h1' || as === 'h2'  ? theme.sizes.xlarge : theme.sizes.medium };
font-family: ${theme.fonts.secondaryFont};
margin-top: 1rem;
`}
`