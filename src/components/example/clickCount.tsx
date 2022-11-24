import styles from './clickCount.module.scss'
import React, {useEffect, useState} from 'react';

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Clicked the button ${count}`);
});
    return (
    <div className={styles.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default ClickCount
