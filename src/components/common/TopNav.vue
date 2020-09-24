<template>
    <div id="topNav">
        <span class="left-container">
            <slot name="leftBox"></slot>
        </span>
        <span class="title">
            <slot name="midBox" class="title"></slot>
        </span>
        <span class="right-container">
            <slot name="rightBox" ></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "TopNav",
    props: {
        icon: {
            type: String,
            default: ""
        }
    },
    data() {
        return {}
    }

}
</script>

<style scoped lang="scss">
#topNav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 14px;
  border-bottom: 1px solid rgba(221, 221, 221, .2);

  .title {
    font-size: 12px;
    color: #333;
    max-width: 70%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .iconfont {
    font-size: 20px;
  }

  .left-container, .right-container {
    min-width: 20px;
  }

}
</style>