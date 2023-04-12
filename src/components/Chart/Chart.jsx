import { useEffect, useState } from 'react';
import { ChartFooter } from '../ChartFooter/ChartFooter';
import { ChartHeader } from '../ChartHeader/ChartHeader';
import { Table } from '../Table/Table';
import styles from './Chart.module.css';

export const Chart = (props) => {
  const data = [
    {
        name: 'Jane Cooper',
        company: 'Microsoft',
        phone: '(225) 555-0118',
        email: 'jane@microsoft.com',
        country: 'United States',
        status: 'Active',
    },
    {
        name: 'Floyd Miles',
        company: 'Yahoo',
        phone: '(205) 555-0100',
        email: 'floyd@yahoo.com',
        country: 'Kiribati',
        status: 'Inactive',
    },
    {
        name: 'Ronald Richards',
        company: 'Adobe',
        phone: '(302) 555-0107',
        email: 'ronald@adobe.com',
        country: 'Israel',
        status: 'Inactive',
    },
    {
        name: 'Marvin McKinney',
        company: 'Tesla',
        phone: '(252) 555-0126',
        email: 'marvin@tesla.com',
        country: 'Iran',
        status: 'Active',
    },
    {
        name: 'Jerome Bell',
        company: 'Google',
        phone: '(629) 555-0129',
        email: 'jerome@google.com',
        country: 'Réunion',
        status: 'Active',
    },
    {
        name: 'Kathryn Murphy',
        company: 'Microsoft',
        phone: '(406) 555-0120',
        email: 'kathryn@microsoft.com',
        country: 'Curaçao',
        status: 'Active',
    },
    {
        name: 'Jacob Jones',
        company: 'Yahoo',
        phone: '(208) 555-0112',
        email: 'jacob@yahoo.com',
        country: 'Brazil',
        status: 'Active',
    },
    {
        name: 'Kristin Watson',
        company: 'Facebook',
        phone: '(704) 555-0127',
        email: 'kristin@facebook.com',
        country: 'Åland Islands',
        status: 'Inactive',
    },
]
  const [info, setInfo] = useState(data)
  const [inputValue, setInputValue] = useState('')

  const filterData = (inputValue, data) => {
    if(!inputValue) {
      return data
    }
    const set = new Set()
    data.map((i) => {
      const values = Object.values(i);
      values.map(item => {
        if(item.toLowerCase().includes(inputValue.toLowerCase())) {
          set.add(i)
        }
      })
    });
    return Array.from(set)
  }
  
  useEffect(()=> {
    const Debounce = setTimeout(()=>{
      const filteredData = filterData(inputValue, data)
      setInfo(filteredData)
    }, 200)
    return () => clearTimeout(Debounce)
  }, [inputValue])

  return (
    <div className={styles.chart}>
      <ChartHeader inputValue={inputValue} setInputValue={setInputValue} info={info} setInfo={setInfo}/>
      <Table inputValue={inputValue} info={info}/>
      <ChartFooter />
    </div>
  );
};
