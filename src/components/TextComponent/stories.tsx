import { TextComponent } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name:'TextComponent',
  component: TextComponent,
  args :{
    children:'This is a TextComponent',
    
  }
}

export const Temaplete = (args:any) => {
  return(
    <div>
      <TextComponent {...args}/>
    </div>
  )
}