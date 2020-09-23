<template>
    <div>
        <TopNav>
            <template #midBox>
                <span>发现</span>
            </template>
        </TopNav>
        <div class="inner-content">
            <slot name="innerContent"></slot>
        </div>
    </div>
</template>

<script>

import InnerPageContent from "@/components/common/InnerPageContent";
import TopNav from "@/components/common/TopNav";


export default {
    name: "index",
    components: {
        InnerPageContent,
        TopNav
    }
}
</script>

<style  lang="scss" scoped>
.inner-content {
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
}
</style>