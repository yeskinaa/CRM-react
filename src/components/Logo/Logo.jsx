import styles from './Logo.module.css';

export const Logo = (props) => {
  return (
    <a href="#" className={styles.logo}>
      <img src="img/Logo.png" alt="Logo Icon" className={styles.logo__img} />
      <h1 className={styles.logo__text}>Dashboard</h1>
      <p className={styles.logo__version}>v.01</p>
    </a>
  );
};
