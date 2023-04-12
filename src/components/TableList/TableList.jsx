import { useState } from 'react';
import { TableItem } from '../TableItem/TableItem';
import styles from './TableList.module.css';

export const TableList = ({info}) => {

  return (
    <tbody className={styles.table__body}>
        {info.map((i, index) => {
            return(
                <tr className={styles.table__item} key={index}><TableItem  info={info[index]}/></tr>
            )
        })}
    </tbody>
  );
};
