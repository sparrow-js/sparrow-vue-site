## 编辑区块

特定场景功能的代码片段，通过基础组件和有特定功能的逻辑组件组合而成，可增删改；可生成可读性强的源代码。

## 使用

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd9bd42b0ece4e2293b18d85ce4a1bb1~tplv-k3u1fbpfcp-zoom-1.image)

选择界面右边的工具盒-》编辑区块，点击或者拖拽需要的区块即可，点击视图区域即可以配置，删除，新增等操作。


## 生成
编辑区块,已高级表单为例：
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4f3ba94689b4129878fa5c1c758f7cb~tplv-k3u1fbpfcp-zoom-1.image)

文件结构
```bash
├── AdvancedTable
│   ├── AddButton
│   │   ├── index.ts
│   │   └── index.vue
│   ├── CancelButton
│   │   ├── index.ts
│   │   └── index.vue
│   ├── DeleteButton
│   │   ├── index.ts
│   │   └── index.vue
│   ├── EditButton
│   │   ├── index.ts
│   │   └── index.vue
│   ├── NewButton
│   │   ├── index.ts
│   │   └── index.vue
│   ├── SaveButton
│   │   ├── index.ts
│   │   └── index.vue
│   ├── index.ts
│   └── init.ts
```

1.首先需要先写出完整的静态功能区块，如下简化代码

```bash
<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
    >
      <el-table-column label="Title">
        <template slot-scope="scope">
          <el-input></el-input>
          <template v-else> {{ scope.row.title }}</template>
        </template>
      </el-table-column>

       <el-table-column label="操作" width="110" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.editable">
            <span v-if="scope.row.isNew">
              <a @click="saveRow(scope.row)">添加</a>
              <el-button slot="reference">删除</el-button>
            </span>
            <span v-else>
              <a @click="saveRow(scope.row)">保存</a>
              <a @click="cancel(scope.row.id)">取消</a>
            </span>
          </span>
          <span v-else>
            <a @click="toggle(scope.row.id)">编辑</a>
            <el-button slot="reference">删除</el-button>
          </span>
      
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="newMember">新增</el-button>

  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      tableItem: {
        id: '7100001',
        title: 'hello world',
      },
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // 获取数据
    },
    newMember () {
      // 新增
    },
    toggle (id) {
      // 编辑
    },
    cancel (id) {
      // 取消
    },
    remove (id) {
      // 移除
    },
    saveRow (row) {
      // 保存
    },
  }
}
</script>

```
2. 将1代码拆解成如上目录结构，
如编辑按钮，继承基础按钮，定制化配置，在从vue文件取出方法、数据、引用等内容，为后续组装提供信息。
```bash
// 动态化按钮
export default class EditButton extends Button{
  name: string = 'EditButton';
  vueParse: any;
  constructor (params: any) {
    super(params)
    this.config.model.custom.label = '编辑';
    this.config.model.attr.size = 'mini';
    this.config.model.attr.type = 'primary';
    this.config.model.attr['@click'] = 'toggle(row.id)';
    this.setAttrsToStr();
    this.init();
  }
  
  private init () {
    const fileStr = fsExtra.readFileSync(path.join(Config.templatePath, 'EditBlock/AdvancedTable/EditButton',  'index.vue'), 'utf8');
    this.vueParse = new VueParse(this.uuid, fileStr);
  }
}


// 按钮VUE 文件，存放逻辑
<template>
  <div>
    <el-button class="filter-item" style="margin-left: 10px;" typ  e="primary" icon="el-icon-edit" @click="handleCreate">
      新增
    </el-button>
  </div>
</template>
<script>
export default {
  methods: {
    toggle (id) {
      const target = this.list.find(item => item.id === id)
      target._originalData = { ...target };
      target.editable = !target.editable
    },
  }
}
</script>

```
3. 将数据注册到搜索组件，搜索结果如下图：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11434868608c4f00b9328a7048ba3bf4~tplv-k3u1fbpfcp-zoom-1.image)
通过点击、拖拽放到想放的位置即可。

4. 视图区的操作数据传回server
server先生成组件对象树，对2中的template部分、script部分、style部分进行组装，script部分通过babel ast对相应组件进行拆解，最后根据对象树重新组装成想要的代码。拆解代码如下：
```bash
import * as cheerio from 'cheerio';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as _ from 'lodash';

export default class VueParse{
  template: string = '';
  data: any = [];
  methods: any = [];
  components: any = [];
  importDeclarations: any = [];
  uuid: string = '';
  vueStr: string = '';
  vueScript: string = '';
  $: any;
  scriptAst: any;
  style: string = '';
  created: any;


  constructor (uuid: string, vueStr: string) {
    this.uuid = uuid;
    this.vueStr = vueStr.replace(/_unique/g, this.uuid);
    this.init();
  }

  private init () {
    const template = this.vueStr.match(/<template>([\s\S])*<\/template>/g)[0];
    const style = this.vueStr.match(/(?<=<style[\s\S]*>)[\s\S]*(?=<\/style>)/g);
    if (style) {
      this.style = style[0];
    }

    this.$ = cheerio.load(template, {
      xmlMode: true,
      decodeEntities: false
    });

    this.template = this.$('.root').html();


    this.vueScript = this.vueStr.match(/(?<=<script>)[\s\S]*(?=<\/script>)/g)[0];
    this.scriptAst = parser.parse(this.vueScript, {
      sourceType: 'module',
      plugins: [
        "jsx",
      ]
    });

    this.data = this.getData() || [];
    this.methods = this.getMethods() || [];
    this.components = this.getComponents() || [];
    this.getImport();
    this.created = this.getCreated();
  }


  public getData () {
    let data = [];
    traverse(this.scriptAst, {
      ObjectMethod: (path) => {
        const { node } = path;
        if (node.key && node.key.name === 'data') {
          path.traverse({
            ReturnStatement: (pathData) => {
              data = pathData.node.argument.properties
            } 
          })
        }
      }
    });
    return data;
  }

  public setData (data: string) {
    const dataAst = parser.parse(data, {
      sourceType: 'module',
      plugins: [
        "jsx",
      ]
    });

    traverse(dataAst, {
      ObjectExpression: (path) => {
        if (path.parent.type === 'VariableDeclarator') {
          const {node} = path;
          this.data = node.properties;
        }
      }
    });

  }
  
  public getFormatData () {
    const dataAst = parser.parse(`var data = {
      id: []
    }`, {
      sourceType: 'module',
      plugins: [
        "jsx",
      ]
    });
    traverse(dataAst, {
      ObjectExpression: (path) => {
        if (path.parent.type === 'VariableDeclarator') {
          const {node} = path;
          node.properties = this.data;
        }
      }
    })

    return generate(dataAst).code;
  }

  public getMethods () {
    let methods = [];
    traverse(this.scriptAst, {
      ObjectProperty: (path) => {
        const {node} = path;
        if (node.key.name === 'methods') {
          methods = node.value.properties;
        }
      }
    });
    return methods;
  }

  public getComponents () {
    let components = [];
    traverse(this.scriptAst, {
      ObjectProperty: (path) => {
        const {node} = path;
        if (node.key.name === 'components') {
          components = node.value.properties;
        }
      }
    });
    return components;
  }

  public getImport () {
    const body = _.get(this.scriptAst, 'program.body') || [];
    body.forEach(item => {
      if (item.type === 'ImportDeclaration') {
        this.importDeclarations.push({
          path: _.get(item, 'source.value'),
          node: item
        });
      }
    });    
  }

  public getCreated () {
    let created = null;
    traverse(this.scriptAst, {
      ObjectMethod: (path) => {
        const {node} = path;
        if (node.key.name === 'created') {
          created = node;
        }
      }
    });
    return created;
  }
}
```

5. 最后将文件输出到对应的项目下，实时预览

## 分类

### 数据面板
![](https://unpkg.com/@sparrow-vue/images@1.0.1/assets/1000002.png)
### 介绍面板

![](https://unpkg.com/@sparrow-vue/images@1.0.1/assets/1000003.png)

### 卡片详情

![](https://unpkg.com/@sparrow-vue/images@1.0.1/assets/1000001.png)

### 卡片表单

![](https://unpkg.com/@sparrow-vue/images@1.0.1/assets/1000004.png)

### 步骤表单
![](https://unpkg.com/@sparrow-vue/images@1.0.1/assets/1000005.png)


### 高级表单
![](https://unpkg.com/@sparrow-vue/images@1.0.6/assets/1000014.png)

### 展示行表格

![](https://unpkg.com/@sparrow-vue/images@1.0.1/assets/1000006.png)

### 综合表格

![](https://unpkg.com/@sparrow-vue/images@1.0.3/assets/1000013.png)

持续新增ing
