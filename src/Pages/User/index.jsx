import React from 'react'
import { Table } from 'antd';

export default function User() {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '性别', dataIndex: 'gender', key: 'gender' },
    { title: '部门', dataIndex: 'depart', key: 'depart' },
    { title: '人脸信息', dataIndex: 'face_info', key: 'face_info' },
    { title: '创建时间', dataIndex: 'cyime', key: 'ctime' },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];
  
  const data = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      face_token: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      face_token: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      face_token: 'This not expandable',
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      face_token: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];

  return (
     <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.face_token}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
  )
}
