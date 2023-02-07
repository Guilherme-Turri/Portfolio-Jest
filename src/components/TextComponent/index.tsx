import * as Styled from './styles'
interface Props{
  children: React.ReactNode;
  size: 'small'| 'normal'
  }
 
export const TextComponent: React.FC<Props>= ({children, size}) =>{
  return (

    <Styled.Container size={size}>
      {children}
    </Styled.Container>

  )
}