import {Projects} from '.'
import mock from './mock'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name:'Projects',
  component: Projects,
  args: mock
}

export const Template = (args) =>{
  return (
    <div>
      <Template {...args} />
    </div>
  )
}