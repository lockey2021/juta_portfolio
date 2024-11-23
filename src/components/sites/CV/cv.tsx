import React from 'react'
import styles from './cv.module.scss'
import { useTranslation } from 'react-i18next';
import finnishResume from './JutaLockeyOhjelmointiSuomiCV23112024.pdf';
import englishResume from './JutaProgrammingCV23112024.pdf';


type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  const {t, i18n} = useTranslation();


  const openResume = () => {
    const pdfUrl =
      i18n.language === 'fi'
        ? finnishResume
        : englishResume
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className={styles.CVcontainer}>
      <div className={styles.paddings}>
        <div className={styles.gradientBorder}>
      <h1>
        {t('cv.cv')} {/*information about your work and education background */}
      </h1>
      <h2>{t('cv.programming')}</h2>
      <div className={styles.nameDate}>
        <h3>{t('cv.company')}</h3>
        <h3>{t('cv.date')}</h3>
      </div>
      <h4>{t('cv.title')}</h4>
      <p>{t('cv.jobDescription')}</p>
      <h5>{t('cv.learnt')}</h5>
      <div className={styles.listItems}>
      <p>Lua</p>
      <p>C</p>
      <p>C++</p>
      <p>KNX</p>
      <p>OCPP</p>
      <p>Javascript</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>React</p>
      <p>i18next</p>
      <p>React Native</p>
      <p>Node.js</p>
      <p>MongoDB</p>
      <p>Azure</p>
      <p>Trello</p>
      <p>{t('cv.electrical')}</p>
      <p>{t('cv.leading')}</p>
      <p>Agile</p>
      <p>Scrum</p>
      </div>
      
      <h2>{t('cv.educationTitle')}</h2>
      <div className={styles.nameDate}>
        <h3>{t('cv.school')}</h3>
        <h3>{t('cv.schoolDate')}</h3>
      </div>
      
      <p>{t('cv.degree')}</p>
      <p>{t('cv.grade')}</p>

      <h5>{t('cv.learnt')}</h5>
      <div className={styles.listItems}>
      <p>Unity</p>
      <p>C#</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>Typescript</p>
      <p>SCSS</p>
      <p>React</p>
      <p>Node.js</p>
      <p>Java</p>
      <p>Python</p>
      <p>SQL</p>
      <p>NoSQL</p>
      <p>Agile</p>
      <p>Scrum</p>
      <p>Arduino</p>
      <p>Raspberry Pi</p>
      <p>{t('cv.soldering')}</p>
      <p>{t('cv.cybersecurity')}</p>
      <p>Powershell</p>
      <p>ERD plus</p>
      <p>Github</p>
      </div>
      <div className={styles.languageStyle}>
      <h2>{t('cv.languages')}</h2>
      <div className={styles.languageNames}><h4 className={styles.languageTitle}>{t('cv.estonian')}</h4><p>{t('cv.proficiency')}</p></div>
      <div className={styles.languageNames}><h4 className={styles.languageTitle}>{t('cv.english')}</h4><p>{t('cv.proficiency')}</p></div>
      <div className={styles.languageNames}><h4 className={styles.languageTitle}>{t('cv.finnish')}</h4><p>{t('cv.fiProficiency')}</p></div>
      <div className={styles.languageNames}><h4 className={styles.languageTitle}>{t('cv.russian')}</h4><p>{t('cv.ruProficiency')}</p></div>
      <div>
      <button onClick={openResume} >{t('cv.resume')}</button>
      </div>      
      </div>
      </div>
      </div>

    </div>
  )
}

export default Cv
