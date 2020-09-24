<template>
    <div>
        <TopNav>
            <template #midBox>
                <span>发现</span>
            </template>
        </TopNav>
        <div class="inner-content" ref="innerContent">
            <div class="scroll-box">
                <discover-item></discover-item>
                <discover-item></discover-item>
                <discover-item></discover-item>
                <discover-item></discover-item>
                <discover-item></discover-item>
                <discover-item></discover-item>
            </div>
        </div>
    </div>
</template>

<script>

import InnerPageContent from "@/components/common/InnerPageContent";
import TopNav from "@/components/common/TopNav";
import DiscoverItem from "@/views/Discover/children/DiscoverItem";
import IScroll from "iscroll/build/iscroll-probe";


export default {
    name: "index",
    components: {
        DiscoverItem,
        InnerPageContent,
        TopNav
    },
    mounted() {
        this.iscroll = new IScroll(this.$refs.innerContent, {
            bounce: true,
            click: true,
            tap: true,
            probeType: 3
        });

        this.iscroll.on('beforeScrollStart', () => {
            this.iscroll.refresh();
        });
    }
}
</script>

<style lang="scss" scoped>
.inner-content {
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  padding: 0 13px;
  box-sizing: border-box;
  overflow: hidden;
}

.scroll-box {
  padding: 10px 0;
}
</style>