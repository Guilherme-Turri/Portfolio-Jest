/* eslint-disable import/no-anonymous-default-export */
import{Connect} from '.'

export default {
  name: 'Experience',
  component: Connect ,
  args:''
}

export const Template = (args) => {
  return(
    <div>
      <Connect {...args}/>
    </div>
  )
}