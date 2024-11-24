import styles from './contact.module.scss'
import React, {useState} from 'react'
import {db} from '../../contactFormFirebase/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'


type ContactProps = {

}

const Contact: React.FC<ContactProps> = () => {
  //adding all of the useStates for firebase
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
    if (!emailPattern.test(email)) {
      alert(t('contact.emailAlert'));
      return;
    }

    // Sanitize inputs
    const sanitizedMessage = DOMPurify.sanitize(message);
    const sanitizedName = DOMPurify.sanitize(name);
    const sanitizedEmail = DOMPurify.sanitize(email);
  

    try {
      await addDoc(collection(db, 'messages'), {
        name: sanitizedName,
        email: sanitizedEmail,
        message: sanitizedMessage,
        timestamp: new Date(),
      });
      alert(t('contact.alert'));
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(t('contact.consoleError'), error);
      alert(t('contact.errorAlert'));
    }
  };

  const { t } = useTranslation()
  
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactTitle}>
        <h1>{t('contact.title')}</h1>
        </div>
        <div className={styles.animationBackground}>
          <div className={styles.contactAnimation}> 
            <form onSubmit={handleSubmit} method='post' id='contactForm'>
                <input type='text' name='name'  placeholder={t('contact.name')} value={name} onChange={(e) => setName(e.target.value)} required autoComplete='name'></input>
                <input type='text' name='email' placeholder={t('contact.email')} value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='email'></input>
                <textarea name='message' placeholder={t('contact.message')} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit" value='Submit'>{t('contact.send')}</button>
            </form>
            </div>
         </div>
     </div>
  )
}

export default Contact