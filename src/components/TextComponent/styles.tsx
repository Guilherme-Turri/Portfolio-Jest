import styled, {css} from "styled-components";
interface TextProps{
  size:'small' | 'normal'
}
  
export const Container = styled.p<TextProps>`
${({theme, size}) => css`
  font-size: ${size==='small'? theme.sizes.small : theme.sizes.medium };
  color: ${theme.colors.white};
  @media (max-width: 940px) {
  word-break: break-all;
  font-size: 1rem;
 
 }
  
`}
`