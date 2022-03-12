import React from 'react'
import { Table } from 'antd';


export default function Manager() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 150,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '操作',
      dataIndex: 'password',
    },
  ];
  
  const data = [];


  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
  )
}
