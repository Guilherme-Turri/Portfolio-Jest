/* eslint-disable import/no-anonymous-default-export */
import{Home} from '.'
import mock from './mock'

export default {
  name: 'GridTwoColumns',
  component: Home,
  args: mock
}

export const Template = (args) => {
  return(
    <div>
      <Home {...args}/>
    </div>
  )
}