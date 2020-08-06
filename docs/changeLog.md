---
title: 更新日志
---

## 更新日志

遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范。

#### 🚀 1.6.8-bate8

`2020-08-06`

- HandleBox: 组件优化

#### 🚀 1.6.8-bate7

`2020-08-04`

- FormItem
  - 修复 itemType = number 时，inputProps 无效的问题
- TdUpload
  - 删除了 Preview 的子组件

#### 🚀 1.6.8-bate6

`2020-07-31`

- 组件目录结构优化

#### 🚀 1.6.8-bate5

`2020-07-31`

- redirect
  - 调用调整，现在可以直接从 td-antd 中获取
- TagAddon
  - 移除了该组件
- TablePage
  - fetchList 改为 query

#### 🚀 1.6.8-bate3

`2020-07-21`

- TdUpload
  - 新增 isSize 来判断图片宽高

#### 🚀 1.6.8-bate2

`2020-07-21`

- TdUpload
  - 新增 callback('validate', file, files)

#### 🚀 1.6.8-bate1

`2020-07-21`

- TdUpload
  - 优化 callback('before', file, files)，添加文件参数
  - 新增属性 isSize 来控制图片的宽高

### 🚀 1.6.6

`2020-07-18`

- TdUpload
  - 新增属性：name
  - 优化 listType = 'picture-card' 时的按钮样式

### 🚀 1.6.5

`2020-07-09`

- TdInputNumber
  - class 组件更改为函数组件
- PopoverBox
  - class 组件更改为函数组件
  - 新增属性：confirmLoading，ref.visible()
  - 删除属性：show()，hide()
- ModalBox
  - class 组件更改为函数组件
  - 新增属性：ref.visible()
  - 删除属性：show()，hide()
- TablePage
  - 新增属性 success

### 🚀 1.6.4

`2020-07-03`

- toast
  - 移除 cb 属性
- DescList
  - visible 现在可以是函数了

### 🚀 1.6.2

`2020-06-17`

- localConfig
  - 新增 local 属性，定义全局语言(部分组件支持)
- pagination
  - 优化 local 的权重

### 🚀 1.6.1

`2020-06-15`

- tools.storageWorker
  - 新增 delete 方法

### 🚀 1.6.0

`2020-06-11`

- TdUpload
  - 优化应用场景，新增 Preview 子组件
- Login
  - 支持回车登录操作

### 🚀 1.6.0-beta.15

`2020-06-09`

- 新增 TdUpload 组件

### 🚀 1.6.0-beta.13

`2020-06-08`

- pagination
  - 优化 API，与之前语法有较大变化，请注意项目中调用的修改。
- SelectMap
  - 修复无法 search 的问题
- TablePage
  - 优化文档

### 🚀 1.6.0-beta.12

`2020-05-27`

- Login
  - 新增子组件 SignIn、SignUp、ResetPassword
  - 优化文档

### 🚀 1.6.0-beta.11

`2020-05-25`

- Login
  - 修复文案拼写错误

### 🚀 1.6.0-beta.10

`2020-05-21`

- Login
  - 优化 575px 宽度下的展示
  - 优化文案

### 🚀 1.6.0-beta.8

`2020-05-19`

- tools
  - 新增 isPromise 方法
  - 新增 noPassByInfo 方法，支持手机和邮箱脱敏
  - 删除 noPassByMobile 方法
- Login：新增登录组件，用于 Foodpanel 产品的登录

### 🚀 1.6.0-beta.7

`2020-05-14`

- EmptyBox
  - 优化了组件的 API，使其支持原 Empty 的属性
  - 内置了一张 `好看` 的图片，属性为 inside

### 🚀 1.6.0-beta.6

`2020-05-13`

- TablePage：修复了一个已知问题，配置项无法正常获取，导致列表不发送请求的问题。

### 🚀 1.6.0-beta.5

`2020-05-12`

- 新增：TablePage
- localConfig
  - 新增 config.request 配置项

### 🚀 1.6.0-beta.4

`2020-05-12`

- DescList：修复bug

### 🚀 1.6.0-beta.3

`2020-05-12`

- tools
  - downloadBlob：重构了该方法，支持后端返回的 json 错误码信息
  - toThousands：新增第二个入参 decimal
- FormItem：优化文档，新增 FAQ
- TagAddon：hooks 重构
- SelectMap：hooks 重构
- DescList：hooks 重构

### 🚀 1.6.0-beta.2

`2020-05-10`

- tools
  - downloadBlob：修复无法报错的问题，并在业务处理失败时，不再下载空文件。
- localConfig
  - 新增 config.proxy 配置项

### 🚀 1.6.0-beta.1

`2020-05-07`

- 新增 localConfig 全局配置项
- tools
  - redirect：删除了配置项，内部统一使用了 localConfig。优化了函数的调用方式。

### 🚀 1.5.8

`2020-04-30`

- tools
  - 修复 toThousands 的已知错误，现在 '123,456' 会被转化成 number 类型

### 🚀 1.5.7

`2020-04-28`

- tools
  - 新增 storageWorker 方法
  - 新增 redirect 方法
- 修复 DescList 中 dataIndex 不传值会报错的问题

### 🚀 1.5.5

`2020-04-17`

- tools
  - downloadBlob 支持获取后端设置在 headers 中的文件名
  - 新增 countdown 函数
- DescList 的 unVisible 修改为 visible

### 🚀 1.5.4

`2020-04-14`

- 修复了 DescList 不支持 DescriptionItem 的 span 属性的问题

### 🚀 1.5.3

`2020-04-10`

- 新增 tools 工具集，与 utils 功能相同，同时删除了 utils 方法
- FormItem 新增 decoratorOptions 属性，使其能支持原生的 getFieldDecorator(id, options) 中的 options API

### 🚀 1.5.2-beta.6

`2020-04-07`

- utils 新增方法
  - noPassByMobile

### 🚀 1.5.2-beta.4

`2020-03-03`

- utils 新增方法
  - objectToString
  - downloadBlob

### 🚀 1.5.2-beta.3

`2020-02-28`

- 新增 utils 工具集

### 🚀 1.5.2-beta.1

`2020-02-25`

- 新增 pagination 组件

### 🚀 1.5.2-beta.0

`2020-02-20`

- react 依赖版本更新为 >= 16.8.0
- 删除了 Title 组件
- 将 DivisionBox 组件更名为 HandleBox
- 将 TagWithAddon 组件更名为 TagAddon
- 将 InputNumberWithUnit 组件更名为 TdInputNumber
- 优化了 SelectSearch 的文档
- 优化了 ModalBox 组件，内容区域限制高度为 500px
- 新增了 SearchForm、EmptyBox 组件

### 🚀 1.4.0

`2019-12-19`

- 新增 PopoverBox 组件
- 修复了 SelectSearch 无法被 form 组件受控的问题
  - 原 callback 回调 API 调整为 onChange

### 🚀 1.3.12

`2019-11-26`

- 新增 DivisionBox 组件

### 🚀 1.3.10

`2019-11-15`

- 修复了无法引用到样式的问题

### 🚀 1.3.4

`2019-11-14`

- 现在不再输出 umd 格式了
- 新增了 autoTrack 组件，用于轻量级埋点
- linkBtn 现在支持 `~antd/lib/style/themes/default.less` 的 `@primary-color` 配置了

### 🚀 1.3.3

`2019-10-24`

- FormItem 增加了新的 api（defaultValue）
- TagWithAddon 增加了新的 api（isBackground）

### 🚀 1.3.2

`2019-09-17`

- 优化 Title 组件的样式

### 🚀 1.3.1

`2019-09-03`

- 优化 toast 的全局配置，并更新文档

### 🚀 1.3.0

`2019-09-03`

- 新增 toast 组件

### 🚀 1.2.2

`2019-09-01`

- 修复 lodash.get 的错误引用

### 🚀 1.2.1

`2019-08-29`

- SelectSearch 新增 demo
- debounce 替换为 lodash.debounce；deepGet 替换为 lodash.get
- 约定：引用 lodash 时，方法前加下划线，如：_debounce

### 🚀 1.1.2

`2019-08-22`

- 脚手架更新为 umi-library
