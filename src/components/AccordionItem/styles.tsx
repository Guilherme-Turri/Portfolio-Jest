import styled,{css} from 'styled-components'
import {Container as TextComponent} from '../TextComponent/styles'

interface StatusProps {
  visible:boolean,
}

interface ContainerProps {
  colorDark: boolean
}

export const Container = styled.div<ContainerProps>`
${({theme, colorDark}) => css`
cursor: pointer;
margin-top: 1rem;
padding: 1rem;
width: 50%;
border-radius: 14px;
background: ${colorDark? theme.colors.secondaryBg : theme.colors.primaryBg };
box-shadow: ${colorDark? `-7px 7px 18px #3a3c4d,
             7px -7px 18px #4e5268`: `-7px 7px 18px #22242e,
             7px -7px 18px #2e303e` };

@media (max-width: 940px) {
  width: 100%;
  padding: 0.1rem;
  
 }
`}
`
export const Topic = styled.div`
${({theme}) => css`
  color: ${theme.colors.primaryColor};
  padding-bottom: 1rem;
  @media (max-width: 940px) {
  font-size: 1rem;
  
 }
`}
`
export const Status = styled.div<StatusProps>`
${({theme, visible}) => css`
display: ${visible? 'block' : 'none'};
& ${TextComponent} {
color: ${theme.colors.tertiaryColor};
font-family: ${theme.fonts.secondaryFont};
}
` }
`