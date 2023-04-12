import styles from "./TableItem.module.css";

export const TableItem = ({ info }) => {
  return (
    <>
      <td>{info.name}</td>
      <td>{info.company}</td>
      <td>{info.phone}</td>
      <td>{info.email}</td>
      <td>{info.country}</td>
      <td>
        {info.status === "Active" 
        ? (
          <button className={styles.table__btn + " " + styles.btnActive}>
            {info.status}
          </button>
        ) 
        : (
          <button className={styles.table__btn + " " + styles.btnInactive}>
            {info.status}
          </button>
        )}
      </td>
    </>
  );
};
