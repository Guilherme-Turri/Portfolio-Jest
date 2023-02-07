import { Heading } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name:'Heading',
  component: Heading,
  args :{
   children:'Heading',
    colorDark: false,
    uppercase:true
  }
}

export const Temaplete = (args:any) => {
  return(
    <div>
      <Heading {...args}/>
    </div>
  )
}