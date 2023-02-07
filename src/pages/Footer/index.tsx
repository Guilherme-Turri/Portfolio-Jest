import React from 'react'
import { SectionBackground } from '../../components/SectionBackGround'
import{Footer as Footering} from '../../components/Footer'
interface FooterProps{
  background:boolean
  fill:boolean
}
export const Footer:React.FC<FooterProps> = ({background, fill}) => {
  return (
    <SectionBackground background={background} fill={fill}>
    <Footering >Guilherme Turri - 2023</Footering>
   </SectionBackground>
  )
}
