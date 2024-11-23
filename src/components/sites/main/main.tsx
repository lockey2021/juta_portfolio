import React from 'react'
import styles from './main.module.scss'
import { Link } from 'react-router-dom'
import BeautifulSky from './beautifulSky.jpg'
import { useTranslation } from 'react-i18next'

type MainProps = {

}

const Main: React.FC<MainProps> = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.mainContainer}> {/*Tell who you are */}
      <div className={styles.imageContainer}>
      <img src={BeautifulSky} alt="welcome" ></img>
      <h1 className={styles.animatedText}>{t('home.title')} {/*&#128578;*/}</h1>
      </div>
      <div className={styles.paddings}>
      <div className={styles.gradientBorder}>
      <h1>{t('home.myName')}</h1>
      <h2>{t('home.myJob')}</h2>
      <p>{t('home.description1')}</p>
      <p>{t('home.description2')}</p>
      <div className={styles.buttonSpacing}>
        <Link to='./Aboutme'><button>{t('home.moreAboutMe')}</button></Link>
        <Link to='/Contact'><button>{t('home.hireMe')}</button></Link>
        <Link to='/CV'><button>{t('home.openCV')}</button></Link>
        <Link to='/Projects'><button>{t('home.projects')}</button></Link>
      </div>
      <div className={styles.buttonSpacing}>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Main
