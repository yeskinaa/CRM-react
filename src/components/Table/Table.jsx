import { TableList } from '../TableList/TableList';
import styles from './Table.module.css';

export const Table = ({info}) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr className={styles.table__title}>
          <td>Customer Name</td>
          <td className={styles.company}>Company</td>
          <td>Phone Number</td>
          <td>Email</td>
          <td>Country</td>
          <td className={styles.status}>Status</td>
        </tr>
      </thead>
      <TableList info={info}/>
    </table>
  );
};
