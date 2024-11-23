import styles from './footer.module.scss'
import {FaLinkedin, FaUnity} from 'react-icons/fa'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {db} from '../contactFormFirebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import {useTranslation} from 'react-i18next'


type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  //adding all of the useStates for firebase
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
    if (!emailPattern.test(email)) {
      alert(t('footer.emailAlert'));
      return;
    }

    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      alert(t('footer.alert'));
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(t('footer.consoleError'), error);
      alert(t('footer.errorAlert'));
    }
  };

  const { t } = useTranslation()

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footercontainer}>
      <div className={styles.footerLeft}>
        <Link to="/" className={styles.footLinks}><h3>{t('footer.myPortfolio')}</h3></Link>
        <div className={styles.footerMenu}>
          <ul>
            <li>
            <Link className={styles.footLinks} to="/">{t('footer.home')}</Link>
            </li>
            <li>
              <Link className={styles.footLinks} to="/CV">{t('footer.myCV')}</Link>
            </li>
            <li>
              <Link className={styles.footLinks} to="/Projects">{t('footer.myProjects')}</Link>
            </li>
            <li>
            <Link className={styles.footLinks} to="/Aboutme">{t('footer.about')}</Link>
            </li>
            <li>
              <Link className={styles.footLinks} to="/Contact">{t('footer.contact')}</Link>
            </li>
          </ul>      
          </div>
          <p className={styles.copyright}>&copy; {currentYear} {t('footer.copyright')}</p>
      <div className={styles.linksIcon}>
        <a href='https://www.linkedin.com/in/juta-lockey-03080868' target="_blank" rel='noopener noreferrer'><FaLinkedin className={styles.iconPictures} />
        </a>
        <a href='https://play.unity.com/u/lockey2021' target="_blank" rel='noopener noreferrer'><FaUnity className={styles.iconPictures} /></a>
      </div>
    </div><div className={styles.footerRight}>
        <p>{t('footer.contact')}</p>
        <form onSubmit={handleSubmit} method='post' id='contactForm'>
          <input type='text' name='name' placeholder={t('footer.name')} value={name} onChange={(e) => setName(e.target.value)} required autoComplete='name'></input>
          <input type='text' name='email' placeholder={t('footer.e-mail')} value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='email'>
          </input>
          <textarea name='message' placeholder={t('footer.message')} value={message} onChange={(e) => setMessage(e.target.value)} required>

          </textarea>
          <button type="submit" value='Submit'>{t('footer.send')}</button>

        </form>
        
      </div>
    </footer>
  )
}

export default Footer
