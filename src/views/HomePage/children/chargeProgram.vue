<template>
    <div class="charge-program">
        <nav class="program-nav">
            <div class="nav-title-text">
                付费栏目
            </div>
            <div class="more-item-button" @click="toAllProgram">
                <span class="more-item-button-text">
                    更多
                </span>
                <i class="more-button-icon iconfont icon-more"></i>
            </div>
        </nav>

        <div class="program-content">
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
            <div class="content-el">
                <com-img class="content-el-banner" src="article/7b367367-7084-ba36-f453-a5f5f326a7b7.jpg"></com-img>
                <div class="content-el-des">
                    <i class="content-el-des-icon iconfont icon-naozhong-"></i>
                    <span class="des-text">
                        已更新
                        <strong class="update-num">9</strong>篇
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ComImg from "@/components/common/comImg";

export default {
    name: "chargeProgram",
    components: {ComImg},
    methods: {
        toAllProgram() {
            this.$router.push('/charge/program');
        }
    }
}
</script>

<style scoped lang="scss">
.charge-program {
  width: 100%;
  padding-top: 10px;
  box-sizing: border-box;

  .program-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    .nav-title-text {
      color: #333;
    }

    .more-item-button {
      display: flex;
      align-items: center;
      color: #999;


      .more-button-icon {
        font-size: 12px;
        margin-left: 6px;
        margin-top: 1px;
      }
    }
  }

  .program-content {
    display: flex;
    justify-content: space-between;
    padding: 25px 0 10px;

    .content-el {
      width: 47%;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      color: #fff;
      font-size: 12px;
      box-shadow: 2px 12px 15px rgba(0, 0, 0, .4);

      .content-el-banner {
        width: 100%;
        height: 210px;
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
  }
}
</style>