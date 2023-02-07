/* eslint-disable import/no-anonymous-default-export */
import{Experience} from '.'
import mock from '../../components/Card/mock'

export default {
  name: 'Experience',
  component: Experience,
  args: mock
}

export const Template = (args) => {
  return(
    <div>
      <Experience {...args}/>
    </div>
  )
}