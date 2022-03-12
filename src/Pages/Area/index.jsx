import React from 'react'
import { Table ,Tag, Space} from 'antd';

export default function Area() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'name',
    },
    {
      title: '区域名称',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '包含部门',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      id: 'John Brown',

      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      id: 'Jim Green',

      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      id: 'Joe Black',

      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  )
}
