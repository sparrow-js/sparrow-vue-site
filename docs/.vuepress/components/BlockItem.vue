<template>
  <div class="block">
    <div class="block__toolbar">
      <div
        class="block__preview"
        :style="{ 'background-image': `url(${info.screenshot})` }"
      ></div>
      <div class="block__operate">
        <div style="margin-bottom: 4px;">
          <a :href="repository.url" target="_blank">查看源代码</a>
        </div>
      </div>
    </div>
    <div class="block-content">
      <h2 class="block-title">{{ info.title }}</h2>
      <!-- <p class="block-des">{{ info.description }}</p> -->
      <div class="block-label__box">
        <span
          class="block-label__item"
          v-for="(tagItem, index) in info.tags"
          :key="index"
          >{{ tagItem }}</span
        >
        <span
          class="block-label__item">
          from: ice
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
    repository: Object
  }
}
</script>
<style lang="scss" scoped>
.block {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  &__toolbar {
    background-color: #30303d;
    height: 150px;
    position: relative;
  }
  &__preview {
    width: 100%;
    height: 100%;
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-color: #fff;
  }
  &__operate {
    opacity: 0;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  &__operate:hover {
    opacity: 1;
  }

  &-content {
    background-color: #30303d;
    padding: 10px;
    margin-top: 1px;
    text-align: left;
  }
  &-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    line-height: 22px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
    margin: 0;
    padding: 0;
    border: none;
  }
  &-des {
    margin-top: 4px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.45);
    letter-spacing: 0;
    line-height: 20px;
    height: 40px;
    margin-bottom: 0;
  }
  &-label__box {
    line-height: 1;
  }
  &-label__item {
    margin-right: 4px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.45);
    margin: 0;
    padding: 0;
  }
}
.add-component {
  display: flex;
  flex-direction: column;
  &__label {
    text-align: left;
    margin-bottom: 3px;
  }
}
</style>
