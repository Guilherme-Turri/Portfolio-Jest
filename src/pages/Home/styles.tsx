import styled, {css} from 'styled-components'
import {Container as TextComponent} from '../../components/TextComponent/styles'

export const Container = styled.div`
${({theme}) => css`
display: flex;

`}
` 
export const Text = styled.div`
${({theme}) => css`
display: flex;
flex-direction: column;
justify-content: center;
& ${TextComponent}:nth-child(3){
  color: ${theme.colors.tertiaryColor};
  font-family: ${theme.fonts.secondaryFont};
  margin-bottom: 1rem;
}
@media (max-width: 940px) {
padding-top: 10rem;

 }
& ${TextComponent}:nth-child(3){
  color: ${theme.colors.tertiaryColor};
  font-family: ${theme.fonts.secondaryFont};
  margin-bottom: 1rem;
}
`}
` 
export const Midia = styled.div`
${({theme}) => css`
display: flex;
margin:  0 auto;

@media (max-width: 940px) {
  
  display: none;
 }
`}
` 