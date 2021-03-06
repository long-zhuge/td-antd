---
title: storageWorker
---

## storageWorker

针对 localStorage 的缓存操作

## 代码演示

```jsx
import React, { useEffect } from 'react';
import { Space } from 'antd';
import { LinkBtn, tools } from 'td-antd';

const { storageWorker } = tools;

export default () => {
  const setDemo = () => {
    storageWorker({
      type: 'set',
      fields: {
        demo: { a: 1, b: 2, c: 3 },
      },
      callback(res) {
        console.dir(res)
      },
    })
  };
  
  const getDemo = () => {
    const res = storageWorker();
    console.log(res);
  };
  
  const getDemo2 = () => {
      storageWorker({
        callback(res) {
          console.log(res);
        }
      });
    };
  
  const deleteDemo = () => {
    storageWorker({
      type: 'delete',
      fields: ['demo'],
      callback(res) {
        console.log(res)
      },
    })
  };

  return (
    <Space>
      <LinkBtn onClick={setDemo}>写入</LinkBtn>
      <LinkBtn onClick={getDemo}>直接获取</LinkBtn>
      <LinkBtn onClick={getDemo2}>callback获取</LinkBtn>
      <LinkBtn onClick={deleteDemo}>删除</LinkBtn>
    </Space>
  );
}
```

## API

function(object)

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|version|写入缓存的 key 值|String|'v1'|
|type|get = 获取，set = 写入，delete = 删除|String|'get'|
|fields|字段集，当 type = set 时，该字段为对象，如 { key: value }；当 type = delete 时，该对象为数组字符串，如 ['key1', 'key2']|Object|{}|
|callback|回调函数，返回处理后的数据|Function(res)|-|
