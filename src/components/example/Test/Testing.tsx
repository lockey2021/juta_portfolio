import styles from './test.module.scss'
import React from 'react'

type TestingComponentProps = {

}

const TestingComponent: React.FC<TestingComponentProps> = () => {
  return (
    <div className={styles.card}>
      <h1>Animate Borders</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem ullam et, natus impedit quae veniam optio a doloremque officiis beatae, itaque nesciunt nostrum quasi molestiae laudantium dolor asperiores soluta sint sed ratione cupiditate. Laudantium earum reiciendis enim.</p>
</div>
  )
}

export default TestingComponent
