import styles from './someExampleComponent.module.scss'
import React from 'react'

type SomeExampleComponentProps = {

}

const SomeExampleComponent: React.FC<SomeExampleComponentProps> = () => {
  return (
    <div className={styles.container}>
  <h1>Header</h1>
  <p>My supercool component</p>
</div>
  )
}

export default SomeExampleComponent
