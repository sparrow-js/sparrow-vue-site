<template>
  <div class="blockbox">
    <ul class="blockbox-list">
      <li class="blockbox-item" v-for="item in list" :key="item.key">
        <block-item 
          :info="item.blockConfig"
          :repository="item.repository"
        ></block-item>
      </li>
    </ul>
  </div>
</template>
<script>
import BlockItem from './BlockItem.vue';
const blockList = [{"name":"@sparrow-vue/basic-form-block","version":"1.0.1","description":"基础表单","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/BasicForm"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"basic-form","title":"基础表单","tags":["表单"],"screenshot":"https://unpkg.com/@sparrow-vue/basic-form-block@1.0.1/snapshot.png"}},{"name":"@sparrow-vue/basic-exception-block","version":"1.0.1","description":"基于element-ui组件的基础异常报错","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/BasicException"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"basic-exception","title":"基础异常报错","tags":["异常"],"screenshot":"https://unpkg.com/@sparrow-vue/basic-exception-block@1.0.1/snapshot.png"}},{"name":"@sparrow-vue/basic-table-block","version":"1.0.3","description":"基础表格","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/BasicTable"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"basic-table","title":"基础表格","tags":["表格"],"screenshot":"https://unpkg.com/@sparrow-vue/basic-table-block@1.0.3/snapshot.png"}},{"name":"@sparrow-vue/data-display-block","version":"1.0.2","description":"用于简单数据的模板展示","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/DataDisplay"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","normalize.css":"^8.0.0","vue":"^2.5.16"},"blockConfig":{"name":"data-display","title":"数据展示","tags":["数据展示"],"screenshot":"https://unpkg.com/@sparrow-vue/data-display-block@1.0.2/snapshot.png"}},{"name":"@sparrow-vue/empty-content-block","version":"1.0.2","description":"基于element-ui组件的空内容提示","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/EmptyContent"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"empty-content","title":"空内容提示","tags":["异常"],"screenshot":"https://unpkg.com/@sparrow-vue/empty-content-block@1.0.2/snapshot.png"}},{"name":"@sparrow-vue/select-table-block","version":"1.0.1","description":"多选表格","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/SelectTable"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"select-table","title":"多选表格","tags":["表格"],"screenshot":"https://unpkg.com/@sparrow-vue/select-table-block@1.0.1/snapshot.png"}},{"name":"@sparrow-vue/basic-not-found-block","version":"1.0.2","description":"基于element-ui组件的404 报错提示","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/BasicNotFound"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"basic-not-found","title":"404 报错提示","tags":["异常"],"screenshot":"https://unpkg.com/@sparrow-vue/basic-not-found-block@1.0.2/snapshot.png"}},{"name":"@sparrow-vue/fixed-table-block","version":"1.0.2","description":"固定列和表头的表格","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/FixedTable"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"fixed-table","title":"固定表格","tags":["表格"],"screenshot":"https://unpkg.com/@sparrow-vue/fixed-table-block@1.0.2/snapshot.png"}},{"name":"@sparrow-vue/tab-table-block","version":"1.0.1","description":"基于element的标签页表格组合","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/TabTable"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"tab-table","title":"基于element的标签页表格组合","tags":["表格"],"screenshot":"https://unpkg.com/@sparrow-vue/tab-table-block@1.0.1/snapshot.png"}},{"name":"@sparrow-vue/not-permission-block","version":"1.0.1","description":"基于element-ui组件的无权限提示","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/NotPermission"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","vue":"^2.5.16"},"blockConfig":{"name":"not-permission","title":"无权限提示","tags":["异常"],"screenshot":"https://unpkg.com/@sparrow-vue/not-permission-block@1.0.1/snapshot.png"}},{"name":"@sparrow-vue/tag-message-list-block","version":"1.0.1","description":"标签消息列表","author":"","files":["src/","lib/","snapshot.png"],"repository":{"type":"git","url":"https://github.com/sparrow-js/vue-market/tree/master/blocks/TagMessageList"},"license":"MIT","keywords":["sparrow","vue","block"],"dependencies":{"@vue-materials/basic-container":"^1.0.0","normalize.css":"^8.0.0","vue":"^2.5.16"},"blockConfig":{"name":"tag-message-list","title":"标签消息列表","tags":["列表"],"screenshot":"https://unpkg.com/@sparrow-vue/tag-message-list-block@1.0.1/snapshot.png"}}]
console.log(blockList);
export default {
  props: {
    list: {
      type: Array,
      default () {
        return blockList;
      }
    },
    type: String
  }
};

</script>
<style lang="scss" scoped>
.blockbox {
  width: 100%;
  height: 100%;
  &-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  &-item {
    color: #fff;
    width: 33%;
    flex-shrink: 0;
    min-height: 200px;
    padding: 10px;
    box-sizing: border-box;
    list-style: none;
  }
}
</style>
