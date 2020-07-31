---
title: pagination
---

## pagination

在 Table 组件中使用的分页器。可以使用 [Pagination](https://ant-design.gitee.io/components/pagination-cn/) 相关的 API。

```jsx
import React, { useState } from 'react';
import { Row, Col, Table, Button } from 'antd';
import pagination from './index';

export default () => {
  const [locale, setLocale] = useState('zh');
  const dataObject = {
    pageNum: 1,
    pageSize: 2,
    totalCnt: 4,
    values: [
      {
        name: '小明',
        age: '18',
      }, {
        name: '小黄',
        age: '19',
      }, {
        name: '小红',
        age: '20',
      },
    ],
  };

  return (
    <Table
      title={() => <Button onClick={() => { setLocale(locale === 'zh' ? 'en' : 'zh') }}>切换语言</Button>}
      rowKey="name"
      columns={[
        {
          title: '姓名',
          dataIndex: 'name',
        }, {
          title: '年龄',
          dataIndex: 'age',
        }
      ]}
      dataSource={dataObject.values || []}
      pagination={pagination({
        locale,
        data: dataObject,
        onChange: (page, pageSize) => {
          console.log(page, pageSize);
        },
        size: 'small'
      })}
    />
  );
}
```

## API

function({ data, locale, ...rest })

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|data|包含 current、pageSize、total 的数据源。<br />`current` 会读取对象中的 pageNum/currPageNo；<br />`pageSize` 会读取对象中的 pageSize/limit；<br />`total` 会读取对象中的 totalCnt/total；|Object|{ current: 1, pageSize: 20, total: 1 }|
|locale|支持的语言`en/zh`，权重：自身 > localConfig|String|en|
|rest|Pagination 组件的其他属性，如 onChange|Object|{}|