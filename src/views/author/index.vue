<template>
    <div class="author-page" v-if="hasLoaded">
        <top-nav>
            <template #leftBox>
                <span :class="`button-left iconfont icon-fanhui`" @click="backToHomePage"></span>
            </template>
            <template #midBox>
                <span>{{ authorInfo.nickname }}</span>
            </template>
            <template #rightBox>

            </template>
        </top-nav>
        <div class="author-info">
            <com-img class="author-info-avatar-img" :src="authorInfo.avatar"></com-img>
            <div class="words-and-sup-num">
                <div class="words-count">
                    <span class="words-num">{{ authorInfo.articles_word_count }}</span>
                    <span class="info-unit">写作字数</span>
                </div>
                <div class="sup-count">
                    <span class="sup-num">{{ authorInfo.liked_count }}</span>
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
import {mapState} from "vuex";

export default {
    name: "index",
    components: {ComImg, TopNav},
    data() {
        return {
            scroll: {},
            hasLoaded: false
        }
    },
    computed: {
        ...mapState({
            authorInfo: state => state.authorStoreModule.authorInfo
        })
    },
    methods: {
        backToHomePage() {
            this.$router.back();
        },

    },
    created() {
        this.$store.dispatch('authorStoreModule/requestAuthorInfo', {
            slug: this.$route.params.slug
        }).then(resolve => {
            this.hasLoaded = true;
        }).catch((reject) => {
            this.hasLoaded = false;
        })
    },

    mounted() {

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