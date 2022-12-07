import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <Link to="/first">My First Component</Link>
      <Link to="/example">My Example Component</Link>
      <Link to="/aboutme">About me</Link>
    </div>
  )
}

export default Navbar
