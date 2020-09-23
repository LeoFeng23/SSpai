<template>
    <div class="author-page">
        <top-nav>
            <template #leftBox>
                <span :class="`button-left iconfont icon-fanhui`" @click="backToHomePage"></span>
            </template>
            <template #midBox>
                <span>一加正式确认 OnePlus 8T 即将发布一加正式确认 OnePlus 8T 即将发布</span>
            </template>
            <template #rightBox>

            </template>
        </top-nav>
        <div class="author-info">
            <com-img class="author-info-avatar-img" src="2018/03/25/ce2a784deb3097acb6ee9d37ea0c13ea.jpg"></com-img>
            <div class="words-and-sup-num">
                <div class="words-count">
                    <span class="words-num">569千</span>
                    <span class="info-unit">写作字数</span>
                </div>
                <div class="sup-count">
                    <span class="sup-num">743</span>
                    <span class="info-unit">获赞数</span>
                </div>
            </div>
        </div>

        <div class="publish-nav">
            <router-link :to="{name: 'AuthorUpdates'}" class="publish-nav-link" replace>
                <span class="link-text">动态</span>
            </router-link>
            <router-link :to="{name: 'AuthorPosts'}" class="publish-nav-link" replace>
                <span class="link-text">个人文章</span>
            </router-link>
        </div>

        <div class="publish-content" ref="publishContent">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>

import TopNav from "@/components/common/TopNav";
import ComImg from "@/components/common/comImg";
import IScroll from 'iscroll/build/iscroll-probe'

export default {
    name: "index",
    components: {ComImg, TopNav},
    data() {
        return {
            scroll: {}
        }
    },
    methods: {
        backToHomePage() {
            this.$router.back();
        }
    },
    mounted() {
        this.scroll = new IScroll(this.$refs.publishContent, {
            tap: true,
            click: true,
            probeType: 3
        });

        this.scroll.on('beforeScrollStart', () => {
            this.scroll.refresh();
        });

        this.scroll.refresh();
    }
}
</script>

<style scoped lang="scss">
.author-page {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .author-info {
    box-sizing: border-box;
    padding: 20px;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-bottom: 1px solid #eee;

    .author-info-avatar-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;

    }

    .words-and-sup-num {
      display: flex;
      margin-top: 20px;

      .words-count {
        margin-right: 60px;
      }

      .words-count, .sup-count {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 12px;

        .words-num, .sup-num {
          line-height: 20px;
          transform: scale(0.9);
        }

        .info-unit {
          transform: scale(0.82);
          color: #999;
        }
      }
    }


  }

  .publish-nav {
    position: absolute;
    width: 100%;
    display: flex;
    top: 182px;
    left: 0;
    align-items: center;
    justify-content: center;

    .publish-nav-link:nth-child(1) {
      margin-right: 100px;
    }

    .publish-nav-link {
      text-decoration: none;
      color: #333;
      font-size: 14px;

      .link-text {
        display: block;
        padding: 12px 20px;
        border-bottom: 2px solid transparent;
      }
    }

    .router-link-active {
      color: #d71a1b;

      .link-text {
        border-bottom-color: #d71a1b;
      }
    }
  }

  .publish-content {
    position: absolute;
    top: 223px;
    width: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
}


</style>