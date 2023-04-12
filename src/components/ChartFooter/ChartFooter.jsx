import styles from './ChartFooter.module.css';

export const ChartFooter = (props) => {
  return (
    <div className={styles.chartFooter}>
      <p className={styles.chartFooter__showing}>Showing data 1 to 8 of 256K entries</p>
      <ul className={styles.paggination}>
        <li className={styles.paggination__item}>
          <span className={styles.paggination__value}> {'<'}</span>
        </li>
        <li className={styles.paggination__item + ' ' + styles.active}>
          <span className={styles.paggination__value}>1</span>
        </li>
        <li className={styles.paggination__item}>
          <span className={styles.paggination__value}>2</span>
        </li>
        <li className={styles.paggination__item}>
          <span className={styles.paggination__value}>3</span>
        </li>
        <li className={styles.paggination__item}>
          <span className={styles.paggination__value}>4</span>
        </li>
        <li className={styles.paggination__item + ' ' + styles.skip}>
          <span className={styles.paggination__value}>...</span>
        </li>
        <li className={styles.paggination__item}>
          <span className={styles.paggination__value}>40</span>
        </li>
        <li className={styles.paggination__item}>
          <span className={styles.paggination__value}>{'>'}</span>
        </li>
      </ul>
    </div>
  );
};
