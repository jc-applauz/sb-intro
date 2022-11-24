//Our component that we are building a story on
import Button from '../components/Button'

//Set up our story; have a default export object
//"Button" being our base component
export default {
  title: 'Components/Button2',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
}

//Template that all of our stories will follow
const Template = (args) => <Button {...args} />

//Another way of creating instances:

//Copies the Template function
export const Green = Template.bind({})
//Then here we can define our args
Green.args = {
  backgroundColor: 'green',
  label: 'Press me',
  size: 'md',
}

export const Orange = Template.bind({})
Orange.args = {
  backgroundColor: 'orange',
  label: 'Press me',
  size: 'md',
}

export const OrangeSmall = Template.bind({})
OrangeSmall.args = {
  backgroundColor: 'orange',
  label: 'Press me',
  size: 'sm',
}
