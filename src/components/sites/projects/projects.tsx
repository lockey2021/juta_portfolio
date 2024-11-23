import React from 'react'
import CrazyTallinn from './CrazyTallinnpicture2.png'
import LegoGame from './LegoGame.png'
import SQLinjection from './SQLinjection2.png'
import styles from './projects.module.scss'
import { useTranslation } from 'react-i18next'


type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.container}>
      <h1>{t('projects.projects')}{/*samples of your skills */}</h1>
      <div className={styles.paddings}>
      <div className={styles.gradientBorder}>
      <h2>{t('projects.lego')}</h2>
      <img src={LegoGame} alt='Lego Game' className={styles.imageFiles}></img>
      <h3>{t('projects.desc')}</h3>
      <p>{t('projects.legoDesc')}</p>
      <h3>{t('projects.skills')}</h3>
      <div className={styles.listItems}>
      <p>Unity</p>
      <p>C#</p>
      </div> 
      <button>
        <a href='https://play.unity.com/en/games/ccee8143-2030-4016-b650-4f9c4602c790/webgl-builds-lego-micro-game-3-level' target="_blank" rel='noopener noreferrer'>{t('projects.nameLego')}</a>
      </button>
      </div>

      <div className={styles.gradientBorder}>
      <h2>{t('projects.tallinn')}</h2>
      <img src={CrazyTallinn} alt="Crazy Tallinn" className={styles.imageFiles}></img>
      <h3>{t('projects.desc')}</h3>
      <p>{t('projects.tallinnDesc')}</p>
      <h3>{t('projects.skills')}</h3>
      <div className={styles.listItems}>
        <p>Unity</p>
        <p>C#</p>
      </div>
      <button>
        <a href='https://play.unity.com/en/games/574c159e-b1ae-4fa3-95c9-da4d73cfab4d/crazy-tallinn-game' target="_blank" rel='noopener noreferrer'>{t('projects.nameTallinn')}</a>
      </button>
      
      </div>
      <div className={styles.gradientBorder}>
      <h2>{t('projects.SQLinject')}</h2>
      <img src={SQLinjection} alt='SQL injection' className={styles.imageFiles}></img>
      <h3>{t('projects.desc')}</h3>
      <p>{t('projects.SQLDesc')}</p>
      <h3>{t('projects.skills')}</h3>
      <div className={styles.listItems}>
        <p>React</p>
        <p>Javascript</p>
        <p>SQL</p>
        <p>MySQL</p>
        <p>Node.js</p>
        <p>CSS</p>
        <p>Github</p>
        <p>Express</p>
        <p>Cors</p>
        <p>Axios</p>
        <p>{t('projects.cyber')}</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
