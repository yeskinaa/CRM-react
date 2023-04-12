import { useEffect } from "react";
import styles from "./ChartHeader.module.css";

export const ChartHeader = ({ inputValue, setInputValue, info, setInfo }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };



  return (
    <div className={styles.chartHeader}>
      <div className={styles.chartHeader__text}>
        <h3 className={styles.chartHeader__title}>All Customers</h3>
        <p className={styles.chartHeader__subtitle}>Active Members</p>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.search__input}
          placeholder="Search"
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        <img
          src="./img/search.svg"
          alt="Search icon"
          className={styles.search__img}
        />
      </div>
    </div>
  );
};
