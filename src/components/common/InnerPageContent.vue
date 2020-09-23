<template>
    <div>
        <div id="topNav">
            <slot></slot>
        </div>
        <div class="inner-content">
            <slot name="innerContent"></slot>
        </div>
    </div>
</template>

<script>
import TopNav from "@/components/common/TopNav";

export default {
    name: "innerPageContent",
    components: {TopNav},
    mounted() {
        console.log(this.$slots)
    }
}
</script>

<style scoped lang="scss">
.inner-content {
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
}
</style>