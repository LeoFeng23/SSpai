<template>
    <div id="bottomNav">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BottomNav"
}
</script>

<style scoped lang="scss">
#bottomNav {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 39px;
  border-top: 1px solid rgba(221, 221, 221, .2);
  display: flex;
  justify-content: center;
}
</style>