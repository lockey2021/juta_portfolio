import styles from './aboutMe.module.scss'
import React from 'react'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <div>
    <h1>About me</h1>
  </div></div>
    
  )
}

export default AboutMe
