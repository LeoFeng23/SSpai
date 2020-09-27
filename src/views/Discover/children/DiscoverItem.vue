<template>
    <div class="discover-item" v-if="contentData">
        <div class="item-banner-box">
            <com-img
                    :src="contentData.banner" :postfix="postfix"></com-img>
            <div class="discover-item-title">
                <span class="item-title-text">{{ contentData.title }}</span>
            </div>
        </div>


    </div>
</template>

<script>
import ComImg from "@/components/common/comImg";

export default {
    name: "DiscoverItem",
    components: {ComImg},
    props: {
        contentData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            postfix: "?imageMogr2/auto-orient/quality/95/thumbnail/!744x400r/gravity/Center/crop/744x400/interlace/1",
        }
    }
}
</script>

<style scoped lang="scss">
.discover-item {
  width: 100%;
  height: 190px;
  margin-bottom: 15px;


  .item-banner-box {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    .discover-item-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .1);
      display: flex;
      align-items: center;
      justify-content: center;


      .item-title-text {
        font-size: 14px;
        color: #fff;
      }
    }
  }


}
</style>