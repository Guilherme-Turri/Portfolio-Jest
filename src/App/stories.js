import {App} from './'

// eslint-disable-next-line import/no-anonymous-default-export
export default{
  name: 'App',
  component: App,
  args:''
}

export const Template = (args) =>{
  return(
    <div>
      <App {...args}/>
    </div>
  )
}