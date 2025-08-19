---
category: Components
group: 布局
title: PortalLayout
subtitle: 门户布局
description: 提供单栏、双栏和三栏布局的门户页面框架
---

为门户应用提供灵活的布局框架，支持单栏、双栏和三栏布局方式。

## 何时使用

- 需要构建管理后台或门户应用时
- 需要灵活的侧边栏布局时
- 需要响应式布局适配时

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">基础用法</code>
<code src="./demo/stoneTest.tsx">双栏布局</code>
<code src="./demo/treeTest.tsx">三栏布局</code>

## API

### PortalLayout

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 布局类型 | `single` \| `two-column` \| `three-column` | `single` | - |
| left | 左侧栏内容 | ReactNode | - | - |
| right | 右侧栏内容 | ReactNode | - | - |
| children | 主要内容 | ReactNode | - | - |
| className | 容器类名 | string | - | - |
| style | 容器样式 | CSSProperties | - | - |
| leftWidth | 左侧栏宽度 | number \| string | 240 | - |
| rightWidth | 右侧栏宽度 | number \| string | 240 | - |
| divider | 是否显示分割线 | boolean | true | - |

## 设计指引

### 布局类型选择

- **单栏布局**: 适用于简单的内容展示，如文章阅读、表单填写等场景
- **双栏布局**: 适用于需要导航的应用，如管理后台、文档网站等
- **三栏布局**: 适用于信息密集的应用，如企业管理系统、数据分析平台等

### 响应式设计

组件内置响应式设计，在小屏幕设备上会自动调整为垂直布局，确保良好的用户体验。
