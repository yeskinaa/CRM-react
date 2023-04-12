import styles from './User.module.css';

export const User = (props) => {
  return (
    <div className={styles.user}>
      <img src="./img/avatar.png" alt="User Photo" className={styles.user__img} />
      <div className={styles.user__info}>
        <p className={styles.user__name}>Evano</p>
        <p className={styles.user__position}>Project Manager</p>
      </div>
    </div>
  );
};
