<template>
    <div class="choose-item">
        <p>{{ contentText }}</p>
        <i class="more iconfont icon-more"></i>
    </div>
</template>

<script>
export default {
    name: "ChooseItem",
    props: {
        contentText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
.choose-item {

  height: 40px;
  background-color: #fff;
  font-size: 12px;
  line-height: 40px;
  padding-left: 15px;
  width: 100%;
  position: relative;
  box-sizing: border-box;

  p {
    transform: scale(0.95);
  }

  .more {
    position: absolute;
    right: 8px;
    top: 0;
    bottom: 0;
    font-size: 12px;
    color: #888;
  }

}
</style>