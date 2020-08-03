# 介绍
sparrow-js 是场景化低代码（LowCode）搭建工作台，通过操作场景化编辑器生成源代码，侧重于支持日常业务需求开发的效率提示，核心目标仅有一条“提生研发效率”，目前提供基于vue、element-ui组件库中后台项目的方案。主要具备以下功能：
- 低代码开发， 快速生成可读性强、vue element-ui组件库的源代码。
- 可视化开发， 通过GUI生成页面代码源文件。
- 资产市场， 代码资源共享，包含组件、区块、场景搭建编辑器。

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


# 快速上手

## 全局安装

```bash
# 全局安装
$ npm install -g sparrow-code

# 运行
$ sparrow
```
---
## 项目内安装

```bash
# 项目内安装
$ npm install sparrow-code -D

# package.json 增加 sparrow
"scripts": {
  "sparrow": "sparrow start -m page"
}

# 项目内安装GUI组件
$ npm install @sparrow-vue/develop-ui -S

# 项目内引用App.vue
<template>
  <div id="app">
    <router-view />
    <sparrow />
  </div>
</template>

<script>
import Sparrow from '@sparrow-vue/develop-ui'

export default {
  components: {
    Sparrow
  },
  name: 'App'
}
</script>


```
### 项目内安装效果图

![](https://imgkr.cn-bj.ufileos.com/0053de82-45f6-48af-ba02-2a1d18e9be08.png)

项目使用：vue-admin-template


# 功能介绍
## 操作界面

![](https://imgkr.cn-bj.ufileos.com/891a7e68-71c0-4a0e-aa8e-2de0c9479345.png)

## 资产市场

资产市场负责生产组件、区块、模版、场景编辑器等原材料，供开发者使用；
```bash
// vue-market 目录结构
.
├── README.md
├── blocks              // 区块
│   ├── BasicException
│   ├── BasicForm
│   ├── BasicTable
│   ├── block.json
│   ├── package.json
│   ├── script
│   ├── src
│   └── table.json
├── boxs              // 场景编辑器
│   ├── build
│   ├── examples
│   ├── package.json
│   ├── src
│   └── tsconfig.json
└── components
    └── README.md
```

[git地址](https://github.com/sparrow-js/vue-market)


## 场景编辑器
场景编辑器负责粘合资产，通过使用相应的场景编辑器可以可视化搭建出各种业务需求页面。
 
### 编辑器目录
```bash
├── components
│   ├── ArrayListBox
│   ├── BoxForm
│   ├── ComponentBox
│   ├── ConfigBox
│   ├── ContainerBox
│   ├── CustomInline
│   ├── InlineToolbar
│   ├── LabelBox
│   ├── LogicBox
│   ├── TableBox
│   ├── TableCellBox
│   ├── TableHeaderBox
│   ├── TabsBox
│   ├── block
│   ├── box
│   ├── layout
│   ├── paragraph
│   └── toolbar
├── index.js
```

### git地址
[https://github.com/sparrow-js/vue-market/tree/master/boxs](https://github.com/sparrow-js/vue-market/tree/master/boxs)

### 表单
表单编辑器提供表单组件的搭建，组件配置，表单内容器组装功能；
1. 选中表单编辑器；
2. 将数据填入右侧配置区；
3. 选择左侧组件；

预览图如下：
![](https://imgkr.cn-bj.ufileos.com/09907b61-964f-4fcb-a8f2-a2592f3007bc.png)

### 表格
表格提供初始化、删除、编辑、链接，弹窗等功能
![](https://imgkr.cn-bj.ufileos.com/327204f2-8568-4a02-98a6-e2a6f0340398.png)

### 区块
选择需要的区块代码片段插入到页面中，实时预览效果
![](https://imgkr.cn-bj.ufileos.com/b94367cb-93cf-45c1-91a1-f8331350f598.png)

### tabs

![](https://imgkr.cn-bj.ufileos.com/b114c9d8-3196-4765-8e2f-fbd079046cbb.png)

### 其他场景编辑器感兴趣可自行体验...



## 区块
区块定位是可复用的代码片段，项目中可自由更改，是参照原子设计理论对页面进行的分级的其中一层，有很多优秀的开源项目根据原子设计理论沉淀的物料可供参考。

### 预览地址
[https://sparrow-js.github.io/sparrow-vue-site/guide/market/block.html](https://sparrow-js.github.io/sparrow-vue-site/guide/market/block.html)

### 提示
<span style="color: #F56C6C;">区块来源于开源项目, 已标注来源，如开源项目原作者有任何问题可以联系：sparrowwht7@gmail.com</span>

## 生成源代码示例：
下面是通过sparrow生成的源代码，代码质量可以持续提升
### 主文件
```bash
<template>
  <div class="home">
    <div class="block-list">
      <div style="margin-bottom: 20px;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">
            <div>
              <div class="block-list">
                <Form12 />
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="配置管理" name="second">
            <div>
              <div class="block-list">
                <Table />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <div class="block-list">
      <paragraph
        :type="'Container'"
        :emit="'client.component.show'"
        :params="{ uuid: 'ec6bd3bf' }"
      />
    </div>
  </div>
</template>

<script>
import Table from "./components/Table";
import Form12 from "./components/Form12";
import generatorMixin from "../mixins/generatorMixin";
export default {
  data() {
    return {
      activeName: "first"
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    Form12,
    Table
  },
  mixins: [generatorMixin]
};
</script>

```
### Form文件

```bash
<template>
  <div class="root">
    <el-form label-width="100px">
      <el-form-item label="文本框">
        <el-input placeholder="" v-model="form.name" />
      </el-form-item>

      <el-form-item label="文本框">
        <el-autocomplete
          :fetch-suggestions="querySearch21b542b3"
          @select="handleSelect21b542b3"
          placeholder="请输入"
          v-model="form.region"
        />
      </el-form-item>

      <el-form-item label="单选框">
        <el-radio-group v-model="form.date1">
          <el-radio
            v-for="item in radionboxOptionsb542b38a"
            :key="item.value"
            :label="item.label"
          />
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  methods: {
    querySearch21b542b3(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants; // 调用 callback 返回建议列表的数据

      cb(results);
    },

    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },

    handleSelect21b542b3(item) {
      console.log(item);
    }
  },

  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      restaurants: [
        {
          value: "三全鲜食（北新泾店）",
          address: "长宁区新渔路144号"
        },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        }
      ],
      state1: "",
      radionboxOptionsb542b38a: [
        {
          value: "单选框1",
          label: "单选框1"
        },
        {
          value: "单选框2",
          label: "单选框2"
        },
        {
          value: "单选框3",
          label: "单选框3"
        }
      ]
    };
  }
};
</script>
```

新功能持续新增中，感兴趣可以关注[https://github.com/sparrow-js/sparrow](https://github.com/sparrow-js/sparrow)




