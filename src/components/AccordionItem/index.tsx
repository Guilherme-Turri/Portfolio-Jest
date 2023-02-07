import React from 'react'
import * as Styled from './styles'
import {Heading} from '../Heading'
import { TextComponent } from '../TextComponent'

 interface AccordionItemProps {
  topic:string,
  answer:string,
  status:string
  colorDark:boolean
 }


export const AccordionItem:React.FC<AccordionItemProps> = ({ topic, answer, status, colorDark  }) =>{
const [visible, setVisible] = React.useState<boolean>(false)
return (
    <Styled.Container  colorDark={colorDark} onClick={() => setVisible(!visible)}> 
      <Styled.Topic>
        <Heading uppercase={false} colorDark={colorDark} as={'h3'}>{topic}</Heading> </Styled.Topic> 
      <Styled.Status visible={visible}>
         <TextComponent size='normal'>{answer} - {status}</TextComponent>  
      </Styled.Status> 
    </Styled.Container>

  )
}
