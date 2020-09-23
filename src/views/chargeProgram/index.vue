<template>
    <div class="charge-program-page">
        <top-nav>
            <template #leftBox>
                <span :class="`button-left iconfont icon-fanhui`" @click="backToHomePage"></span>
            </template>
            <template #midBox>
                <span>全部栏目</span>
            </template>
            <template #rightBox>

            </template>
        </top-nav>

        <div class="program-content" ref="programContent">
            <div class="scroll-box">
                <program-item class="program-scroll-item"></program-item>
                <program-item class="program-scroll-item"></program-item>
                <program-item class="program-scroll-item"></program-item>
                <program-item class="program-scroll-item"></program-item>
                <program-item class="program-scroll-item"></program-item>
                <program-item class="program-scroll-item"></program-item>
                <program-item class="program-scroll-item"></program-item>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "@/components/common/TopNav";
import ProgramItem from "@/views/chargeProgram/children/programItem";
import IScroll from 'iscroll/build/iscroll-probe'


export default {
    name: "index",
    components: {ProgramItem, TopNav},
    methods: {
        backToHomePage() {
            this.$router.back();
        }
    },
    mounted() {
        const scroll = new IScroll(this.$refs.programContent, {
            tap: true,
            click: true,
            probeType: 3
        });
        scroll.on('beforeScrollStart', () => {
            console.log('start')
            scroll.refresh()
        })
    }
}
</script>

<style scoped lang="scss">
.program-content {
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px 13px 20px;
  background-color: rgba(238, 238, 238, .4);
  box-sizing: border-box;
  overflow: hidden;

  .scroll-box {
    padding-bottom: 6px;
  }
  .program-scroll-item {
    width: 100%;
    height: 380px;
    margin: 0 0 30px;
  }
}
</style>