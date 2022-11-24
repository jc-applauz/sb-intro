//Our component that we are building a story on
import Button from '../components/Button'

//Set up our story; have a default export object
//"Button" being our base component
export default {
  title: 'Components/Button',
  component: Button,
}

//Declare different instances of our Button:

//"Red" will be inside the 'Button' folder
export const Red = () => <Button label="Press me" backgroundColor="red" />

//"Blue" will be inside the 'Button' folder
export const Blue = () => <Button label="Press me" backgroundColor="blue" />
