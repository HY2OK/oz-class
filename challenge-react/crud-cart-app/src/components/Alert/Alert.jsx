import { AlertDiv } from './AlertStyles'

const Alert = ({ type, text }) => {
  return <AlertDiv type={type}>{text}</AlertDiv>
}

export default Alert
