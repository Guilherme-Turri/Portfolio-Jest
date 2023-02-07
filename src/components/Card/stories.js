import {Card} from '.'
import mock from './mock'
// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name: 'Card',
  component: Card,
  args : mock
}

export const Template = (args) =>{
  return (
    <div>
      <Card {...args} />
    </div>
  )
}