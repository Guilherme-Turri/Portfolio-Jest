  import styled,{css} from 'styled-components'


  export const Container = styled.a`
  ${({theme}) => css`
  font-family: ${theme.fonts.primaryFont};
  display: flex;
    height: 2.5rem;
    width: 5.5rem;
    background: ${theme.colors.tertiaryColor};
    padding: ${theme.sizes.small};
    color:${theme.colors.secondaryBg};
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    justify-content: center;
    align-items: center;
    

    &:hover{
      transform: scale(1.03);
    }
  `}
  
  `