<template>
    <div>
        <TopNav>
            <template #midBox>
                <span>发现</span>
            </template>
        </TopNav>
        <div class="inner-content" ref="innerContent">
            <div class="scroll-box">
                <discover-item v-for="item in discoverDigest" :key="item.id" :content-data="item"></discover-item>
            </div>
        </div>
    </div>
</template>

<script>

import TopNav from "@/components/common/TopNav";
import DiscoverItem from "@/views/Discover/children/DiscoverItem";
import IScroll from "iscroll/build/iscroll-probe";
import {mapState} from "vuex";


export default {
    name: "index",
    components: {
        DiscoverItem,
        TopNav
    },
    data() {
        return {
            hasLoaded: false
        }
    },
    computed: {
        ...mapState({
            discoverDigest: state => state.discoverStore.discoverDigest,
        })
    },
    created() {
        this.$store.dispatch('discoverStore/requestDiscoverDigest', {}).then(() => {
            this.hasLoaded = true
        }).then(() => {
            const iscroll = new IScroll(this.$refs.innerContent, {
                bounce: true,
                click: true,
                tap: true,
                probeType: 3
            });

            iscroll.on('beforeScrollStart', () => {
                iscroll.refresh();
            });
        }).catch(() => {
            this.hasLoaded = false
        })
    },
    mounted() {

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