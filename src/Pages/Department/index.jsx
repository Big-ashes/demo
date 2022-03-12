
import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import axios from '../../axios';
import {useEffect,useState} from 'react';


export default function Deparment() {
  const [data,setData] = useState([])

  useEffect(()=>{
    axios.get(
      "/depart/list/"
    ).then(res =>{
      setData(res.data)
      console.log(res)
      
    }).catch(err =>{
      console.error(err)
    });
  },[])
  

  // const axios = require('axios').default;
  // axios.get('/depart.json').then(res=>{
  //   console.log(res,"====")
  //   console.log(res.id)
  // })

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.address.startsWith(value),
      width: '30%',
    },
    {
      title: '部门名称',
      dataIndex: 'title',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: '所在区域',
      dataIndex: 'distict',
      filters: [
        {
          text: <span>London</span>,
          value: 'London',
        },
        {
          text: <span>New York</span>,
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: (input, record) => record.value.indexOf(input) > -1,
      width: '40%',
    },
  ];

  // const data = [
  //   {
  //     key: '1',
  //     id: 'John Brown',
  //     depart: 32,
  //     distric: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     id: 'Jim Green',
  //     depart: 42,
  //     distric: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     id: 'Joe Black',
  //     depart: 32,
  //     distric: 'Sidney No. 1 Lake Park',
  //   },
  //   {
  //     key: '4',
  //     id: 'Jim Red',
  //     depart: 32,
  //     distric: 'London No. 2 Lake Park',
  //   },
  // ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  return <>
    <Table columns={columns} dataSource={data} onChange={onChange} />
  </>
}
