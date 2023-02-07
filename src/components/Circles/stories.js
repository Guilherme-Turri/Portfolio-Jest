import { Circles } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name : 'Circle',
  component: Circles,
  args:{
 color:'#ff605c'
  }
}

export const Template = (args) => {
  return (
    <div>
      <Circles {...args} />
    </div>
  )
}