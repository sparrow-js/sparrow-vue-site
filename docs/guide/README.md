# 介绍
sparrow-js 是场景化低代码（LowCode）搭建工作台，通过操作场景化编辑器生成源代码，侧重于支持日常业务需求开发的效率提示，核心目标仅有一条“提生研发效率”，目前提供基于vue、element-ui组件库中后台项目的方案。主要具备以下功能：
- 低代码开发， 快速生成可读性强、vue element-ui组件库的源代码。
- 可视化开发， 通过GUI生成页面代码源文件。
- 资产市场， 代码资源共享，包含组件、区块、搭建编辑容器。

## 优势
- sprarrow 的核心目标是“提效”，因此功能上不只是单纯UI的可视化搭建，目前提供函数级别的搭建，提供拥有业务逻辑的代码组装，生成可二次开发的源代码；
- 易于扩展，通过AST读取组件源代码，进行组合，只要页面的逻辑是可拆解的就可以任意组装；
- 可与项目结合，技术上采用本地运行server服务，可以与项目深度结合，实现更多提效手段，更大可操作空间；

## 目录结构
```bash
.
├── README.md
├── sparrow              // sparrow 核心功能，包括可视化搭建、生成源代码服务
│   ├── package.json
│   └── packages
├── sparrow-vue-develop  // 项目内安装界面
│   ├── babel.config.js
│   ├── package.json
│   ├── public
│   ├── src
│   └── vue.config.js
├── sparrow-vue-site     // 文档站点
│   ├── deploy.sh
│   ├── docs
│   └── package.json
└── vue-market           // 资产市场
    ├── blocks
    ├── boxs
    └── components
```
## 结构图
![](https://imgkr.cn-bj.ufileos.com/9d6147af-cecd-45cb-8373-d1576ef1a4f9.webp)


## 工作原理
![](https://imgkr.cn-bj.ufileos.com/fdcd6ce5-6f58-4e21-860a-99b6ecdb3319.png)

1. 首先选择场景编辑器（表单、表格、区块等），场景编辑器渲染到页面；
2. 通过特定场景编辑器选择物料（组件、区块），选择动作传到服务器端；
3. 服务器端生成源代码，输出源代码到预览项目中；
4. 预览项目通过webpack热更新实时展示效果；


新功能持续新增中

