import { SectionBackground } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name:'SectionBackground',
  component: SectionBackground,
  args :{
   
    background: true
  }
}

export const Temaplete = (args:any) => {
  return(
    <div>
      <SectionBackground {...args}/>
    </div>
  )
}