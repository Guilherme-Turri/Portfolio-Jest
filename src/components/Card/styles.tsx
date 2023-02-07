import styled, {css} from "styled-components";
import { Container as TextComponent } from "../TextComponent/styles";

export const Container = styled.div`
${({theme}) => css`
display: flex;
justify-content: space-around;
flex-direction: column;
margin: 1rem;
width: 250px;
min-height: 300px;
background-color: #011522;
border-radius: 8px;
&:hover {

  }
`}
`
export const Circles = styled.div`
${({theme}) => css`
  padding: 0.5rem;
`}
`
export const Info = styled.div`
${({theme}) => css`
  margin: 0 1rem 1rem 1rem;
  & ${TextComponent}{
  font-family: ${theme.fonts.secondaryFont};
  
  }
  
`}
`
export const Btn = styled.div`
${({theme}) => css`
margin: 0 1rem 1rem 1rem;

bottom: 1rem;
`}
`
