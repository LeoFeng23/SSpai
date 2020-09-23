<template>
    <div class="content-el">
        <com-img class="content-el-banner" src="article/52c844a9-3d4c-0129-1cd7-45b28502c28f.jpg"></com-img>
        <div class="content-el-des">
            <i class="content-el-des-icon iconfont icon-naozhong-"></i>
            <span class="des-text">
                        已更新
                <strong class="update-num">9</strong>篇
            </span>
        </div>
    </div>
</template>

<script>
import ComImg from "@/components/common/comImg";

export default {
    name: "programItem",
    components: {ComImg}
}
</script>

<style scoped lang="scss">
.content-el {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-size: 12px;
  box-shadow: 2px 12px 15px rgba(0, 0, 0, .4);

  .content-el-banner {
    width: 100%;
    height: 100%;
  }

  .content-el-des {
    position: absolute;
    left: 9px;
    bottom: 15px;
    display: flex;
    align-items: center;

    .des-text {

      font-size: 12px;
      transform: scale(0.8);
    }

    .content-el-des-icon {
      font-size: 14px;
    }
  }
}
</style>