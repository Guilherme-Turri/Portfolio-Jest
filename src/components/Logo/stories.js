/* eslint-disable import/no-anonymous-default-export */
import{Logo} from '.'


export default {
  name: 'Logo',
  component: Logo,
  args:{
    src:'../../../public/assets/images/svg.svg'
  }
}

export const Template = (args) => {
  return(
    <div>
      <Logo {...args}/>
    </div>
  )
}