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