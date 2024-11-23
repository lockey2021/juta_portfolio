import React from 'react'
import styles from './aboutMe.module.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{t('about.title')}</h1> {/*Tell who you are more */}
      <div className={styles.gradientBorder}>
      <h1>{t('about.name')}</h1>
      <h2>{t('about.jobTitle')}</h2>
      <p>{t('about.description1')}</p>
      <p>{t('about.description2')}</p>
      <p>{t('about.description3')}</p>
      <p>{t('about.description4')}</p>

      <Link to='/Contact'><button>{t('about.contact')}</button></Link>
      <Link to='/CV'><button>{t('about.cv')}</button></Link>
      <Link to='/Projects'><button>{t('about.projects')}</button></Link>
      </div>
    </div>
  )
}

export default AboutMe



// Old About Me webpage

/*import styles from './aboutMe.module.scss'
import React from 'react'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <div>
    <h1>About me</h1>
    <p>I'm a</p>
  </div></div>
    
  )
}

export default AboutMe
*/