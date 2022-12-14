import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Juta's portfolio</h1>
      <div className={styles.menu}>
        <Link to="/" className={styles.navLinks}>Home</Link>
        <Link to="/first" className={styles.navLinks}>My First Component</Link>
        <Link to="/example" className={styles.navLinks}>My Example Component</Link>
        <Link to="/aboutme" className={styles.navLinks}>About me</Link>
      </div>
      <div className={styles.burger}>
      <button onClick={() => setOpen(!open)}><RxHamburgerMenu size={35} color="white"/></button>
      {open && (
      <div className={styles.dropDown}>
        <ul>
          <li><Link to="/" className={styles.dropLink}>Home</Link></li>
          <li><Link to="/aboutme" className={styles.dropLink}>About me</Link></li>
        </ul>
      </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
