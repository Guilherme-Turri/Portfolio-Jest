import {About} from './'
import mock from './mock'
// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name: 'About',
  component: About,
  args:mock
}

export const Template = (args) =>{
  return(
    <div>
      <About {...args}/>
    </div>
  )
}