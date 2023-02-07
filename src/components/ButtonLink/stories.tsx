import { ButtonLink } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name:'ButtonLink',
  component: ButtonLink,
  args :{
   children:'ButtonLink',
   href:'https://www.google.com',
   target:'_blank'
  
  }
}

export const Temaplete = (args:any) => {
  return(
    <div>
      <ButtonLink {...args}/>
    </div>
  )
}