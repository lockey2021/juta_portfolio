import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import styles from './navbar.module.scss'
import {useTranslation} from 'react-i18next'
import { GrLanguage } from 'react-icons/gr'



type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  const {t, i18n} = useTranslation()
  const location = useLocation()


  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setDropdownOpen(false)
  }
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}><Link to="/" className={styles.logoLink}>{t('navbar.myPortfolio')}</Link></h1>    
      <div className={styles.menu}>
        <Link to="/" className={styles.navLinks}>{t('navbar.home')}</Link>
        <Link to="/CV" className={styles.navLinks}>{t('navbar.myCV')}</Link>
        <Link to="/Projects" className={styles.navLinks}>{t('navbar.myProjects')}</Link>
        <Link to="/Aboutme" className={styles.navLinks}>{t('navbar.about')}</Link>
        <Link to="/Contact" className={styles.navLinks}>{t('navbar.contact')}</Link>
      </div>
      <div className={styles.languageContainer}>
        <div className={styles.languageSelector} onClick={toggleDropdown}>
          <GrLanguage className={styles.languageIcon} />
          {dropdownOpen && (
            <div className={styles.languageLinks}>
              <ul>
                <li onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? styles.active : ''}>
                  {i18n.language === 'en' && '✓'}English- Englanti
                </li>
                <li onClick={() => changeLanguage('fi')} className={i18n.language === 'fi' ? styles.active : ''}>
                  {i18n.language === 'fi' && '✓ '}Finnish- Suomi
                </li> 
              </ul>
            </div>
          )}
        </div>
        <div className={styles.languageIndicator}>
          <span>
            {i18n.language.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className={styles.burger}>
      <button onClick={() => setMenuOpen(!menuOpen)}><RxHamburgerMenu size={35} color='black'/></button>
      {menuOpen && (
      <div className={styles.dropDown}>
        <ul>
          <li><Link to="/" className={`${styles.dropLink} ${location.pathname === '/' ? styles.active : ''}`} onClick={handleLinkClick}>{t('navbar.home')}</Link></li>
          <li><Link to="/CV" className={`${styles.dropLink} ${location.pathname === '/CV' ? styles.active : ''}`} onClick={handleLinkClick}>{t('navbar.myCV')}</Link></li>
          <li><Link to="/Projects" className={`${styles.dropLink} ${location.pathname === '/Projects' ? styles.active : ''}}`} onClick={handleLinkClick}>{t('navbar.myProjects')}</Link></li>
          <li><Link to="/Aboutme" className={`${styles.dropLink} ${location.pathname === '/Aboutme' ? styles.active : ''}`} onClick={handleLinkClick}>{t('navbar.about')}</Link></li>
          <li><Link to="/Contact" className={`${styles.dropLink} ${location.pathname === '/Contact' ? styles.active : ''}`} onClick={handleLinkClick}>{t('navbar.contact')}</Link></li>
        </ul>
      </div>
        /*<Link to="/" className={styles.navLinks}>{t('navbar.home')}</Link>
        <Link to="/CV" className={styles.navLinks}>My CV</Link>
        <Link to="/Projects" className={styles.navLinks}>My Projects</Link>
        <Link to="/Aboutme" className={styles.navLinks}>About me</Link>
        <Link to="/Contact" className={styles.navLinks}>Contact</Link>*/


      )}
      </div>
    </div>
  )
}

export default Navbar
