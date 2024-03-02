import styles from './NavBar.module.css'

const NavBar = ({ step }) => {
  return <nav className={styles.nav}>Step {step + 1}</nav>
}

export default NavBar
