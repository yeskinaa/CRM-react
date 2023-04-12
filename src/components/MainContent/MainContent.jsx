import { Chart } from '../Chart/Chart';
import styles from './MainContent.module.css';

export const MainContent = (props) => {
  return (
    <div className={styles.mainContent}>
      <h2 className={styles.title}>
        Hello Evano
        <img src="./img/hand.png" alt="Waving Hand Icon" className={styles.title__img} />,
      </h2>
      <Chart />
    </div>
  );
};
