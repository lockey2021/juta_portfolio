import React from 'react';
import { ReactComponent as Sun} from './Sun.svg';
import {ReactComponent as Moon} from './Moon.svg';
import styles from './lightDarkMode.module.scss';


type LightDarkModeProps = {

}

const LightDarkMode: React.FC<LightDarkModeProps> = () => {
  const setDarkMode = () => {
    document.body.setAttribute('dataTheme' , 'dark')
    localStorage.setItem('selectedTheme' , 'dark')

  };

  const setLightMode = () => {
    document.body.setAttribute('dataTheme' , 'light')
    localStorage.setItem('selectedTheme' , 'light')

  };

  const selectedTheme = localStorage.getItem('selectedTheme')

  if (selectedTheme === 'dark') {
    setDarkMode();
  }

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

    return (
    <div className={styles.darkmodeContainer}>
      <input className={styles.darkmodeInput}
      type='checkbox' id='darkmodeToggle'
      onChange={toggleTheme} 
      defaultChecked= {selectedTheme === 'dark'}/>
      <label className={styles.darkmodeLabel} htmlFor='darkmodeToggle'>
        <Sun className={styles.sun} />
        <Moon className={styles.moon} />
      </label>
      
    </div>
  )
}

export default LightDarkMode
