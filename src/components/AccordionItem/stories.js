/* eslint-disable import/no-anonymous-default-export */
import {AccordionItem} from '.'

export default{
  name: "AccordionItem",
  component: AccordionItem,
  args:{
    topic:'TypeScript',
    answer:'Udemy',
    status:'Cursando'
  }
}

export const Template = ( args ) => {
  return(
    <div>
      <AccordionItem {...args}></AccordionItem>
    </div>
  )
}