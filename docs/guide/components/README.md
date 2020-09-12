## 组件介绍
- 定义：功能比较确定同时复杂度较高，重复，通用。
- 可视化：对组件进行了可视化封装，让组件拥有可视、配置、实时预览能力。

## 组件分类
### 容器
  容器类组件，负责装载交互组件，提供逻辑、表单、表格、弹窗、标签页、文件、卡片等组件。
  <img src="https://unpkg.com/@sparrow-vue/images@1.0.9/assets/comp1.png"  width = "320"  alt="图片名称" align="center" >

#### 基础容器
  基础容器提供简单的div包裹，可进行逻辑绑定
  
| 参数        | 说明	 | 类型          | 可选值	       | 默认值        |
| :--------- | :--:   | :----------- | :----------- | :----------- |
| v-if     |  展示逻辑  | any          | -           | -            |

#### 表单
  表单容器提供对表单组件的包裹，自带标签，验证，具体配置参数可参考element-ui文档生成的代码如下：

```bash
<el-form label-width="100px">
  <div class="drag-box" data-id="5a455708">
    <el-form-item label="文本框">
      <edit-text-box slot="label" :clearClass="true" uuid="45570806">
        文本框
      </edit-text-box>

      <el-input closable="true" />
    </el-form-item>
    <el-form-item label="数字文本框">
      <edit-text-box slot="label" :clearClass="true" uuid="06e2e4c5">
        数字文本框
      </edit-text-box>

      <el-input-number :min="1" :max="10" />
    </el-form-item>
  </div>
</el-form>
```

#### 表格
表格提供修改表头文案、新增列、添加操作按钮等功能；
可以从左面组件树上操作添加、删除表格列。

#### 弹窗
由于热更新会使弹窗关闭，所以弹窗里的内容可以在主界面制作完成在复制到弹窗容器下。弹窗内置dialogVisible字段，可在按钮click事件上绑定以此打开弹窗。

#### 标签页
选项卡切换，类似数据聚合切换

#### 卡片
信息聚合展示。

#### 文件
如果想生成的部分代码以组件形式放在.vue文件下可以使用文件容器。

#### 数组列表
数组列表是对数组数据的处理，提供添加、删除、上下移动。

#### 步骤
步骤内置了next方法和active 状态，可对按钮和逻辑容器设置。

#### 警告
页面中重要信息的提示信息。

#### RouterLink
使用vue-router的跳转容器。

### 布局
  通过基础的 24 分栏，迅速简便地创建布局。
  如下图，提供6列的快捷生成方式，可自定义修改参数。

  <img src="https://unpkg.com/@sparrow-vue/images@1.0.9/assets/comp2.png"  width = "320"  alt="图片名称" align="center" >

### 表单
  由输入框、单选框、日期等组件组成，负责数据收集相关操作，覆盖所有element-ui组件，同时新增常用的组件快速展示，表单组件放置到表单容器内可自动增加标签，放到其他容器内只输出组件本身。

  <img src="https://unpkg.com/@sparrow-vue/images@1.0.9/assets/comp3.png"  width = "320"  alt="图片名称" align="center" >

### 文本
  文本展示类操作

  <img src="https://unpkg.com/@sparrow-vue/images@1.0.9/assets/comp4.png"  width = "320"  alt="图片名称" align="center" >

### 操作
  包含按钮、链接、标签

 <img src="https://unpkg.com/@sparrow-vue/images@1.0.9/assets/comp5.png"  width = "320"  alt="图片名称" align="center" >

### 图片
  图片容器
### 其他
  包括分割线、气泡确认框，有待新增


## 组件库

基础组件库使用element-ui，详细使用请直接移步到官方文档；


