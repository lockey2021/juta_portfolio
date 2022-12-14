import styles from './footer.module.scss'
import {FaLinkedin} from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footerLeft}>
        <h3>Juta's portfolio</h3>
        <p className={styles.footlinks}>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/aboutme">About me</Link>
            </li>
          </ul>
                
                
          </p>
      
      <p className={styles.copyright}>Juta Lockey © 2022</p>
      <div className={styles.linksIcon}>
        <a href='https://www.linkedin.com/in/juta-lockey-03080868'><i><FaLinkedin size={36} color="pink" /></i>
        </a>
      </div>
    </div><div className={styles.footerRight}>
        <p>Contact me if you dare</p>
        <form action='mailto:jutamaria@hotmail.co.uk' method='post'>
          <input type='text' name='message' placeholder='Email'>
          </input>
          <textarea name='message' placeholder='Message'>

          </textarea>
          <button type="submit" value='Submit'>Send</button>

        </form>
      </div>
    </footer>
  )
}

export default Footer
