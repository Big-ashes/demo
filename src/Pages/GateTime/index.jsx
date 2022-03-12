import React from 'react'
import { Table } from 'antd';


export default function GateTime() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '门禁时间',
      dataIndex: 'name',
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
