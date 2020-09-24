<template>
    <div class="discover-item">
        <div class="item-banner-box">
            <com-img
                    src="https://cdn.sspai.com/topic/bbaee48f-7c5d-2e94-3f80-16f3705ba54c.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!744x400r/gravity/Center/crop/744x400/interlace/1"
                    :with-prefix="false"></com-img>
            <div class="discover-item-title">
                <span class="item-title-text">Mac 视觉史：从系统界面了解 Mac 电脑历史</span>
            </div>
        </div>


    </div>
</template>

<script>
import ComImg from "@/components/common/comImg";

export default {
    name: "DiscoverItem",
    components: {ComImg}
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