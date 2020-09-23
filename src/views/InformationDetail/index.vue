<template>
    <div class="post-detail">
        <TopNav>
            <template #leftBox>
                <span :class="`button-left iconfont icon-fanhui`" @click="backToHomePage"></span>
            </template>
            <template #midBox>
                <span>{{ articleData.title }}</span>
            </template>
            <template #rightBox>

            </template>
        </TopNav>
        <div class="inner-content" ref="pageInner">
            <!--            v-html="articleBody"-->
            <div class="content-inner" v-if="hasLoaded">

                <div class="article-title-block">
                    <div class="article-title-banner">
                        <com-img :src="articleData.banner" :with-prefix="false"></com-img>
                    </div>

                    <div class="article-title-text">
                        <h1>{{ articleData.title }}</h1>
                    </div>

                    <div class="article-title-rtime">
                        <span>{{ articleData.rtime }}</span>
                    </div>

                    <div class="article-title-author-info">
                        <div class="author-avatar">
                            <com-img :src="articleData.author.avatar"></com-img>
                        </div>
                        <div class="author-name">
                            <span>{{ articleData.author.nickname }}</span>
                        </div>
                    </div>
                </div>

                <div class="article-body" v-html="articleData.body">
                </div>

                <div class="article-footer">
                    <div class="article-tags">
                        <article-tag-item v-for="element in articleData.tags" :key="element.id"
                                          :content="element.title"></article-tag-item>
                    </div>

                    <div class="article-copyright">
                        <p>© 本文著作权归作者所有，并授权少数派独家使用，未经少数派许可，不得转载使用。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "@/components/common/TopNav";
import IScroll from 'iscroll/build/iscroll-probe'
import {mapState} from "vuex";
import ComImg from "@/components/common/comImg";
import ArticleTagItem from "@/views/InformationDetail/children/articleTagItem";

export default {
    name: "index",
    components: {ArticleTagItem, ComImg, TopNav},
    data() {
        return {
            articleBody: '',
            hasLoaded: false
        }
    },
    methods: {
        backToHomePage() {
            this.$router.back();
        },
        loadScroll() {
            const scroll = new IScroll(this.$refs.pageInner, {
                click: true,
                tap: true,
                probeType: 3
            });

            scroll.on('beforeScrollStart', () => {
                scroll.refresh();
            })
        }
    },
    created() {
        this.$store.dispatch('infoDetail/requestArticleData', {
            id: this.$route.params.id,
        }).then(resolve => {
            this.hasLoaded = true;
        }).then((resolve) => {
            this.loadScroll();
        }).catch(() => {
            this.hasLoaded = false;
        })
    },
    computed: {
        ...mapState({
            articleData: state => state.infoDetail.articleData,
        })
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
.inner-content {
  padding: 5px 15px 0;
  box-sizing: border-box;
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}

.content-inner {
  padding-bottom: 50px;
}

.article-title-block {
  .article-title-banner {
    width: 100%;
    height: 140px;
    margin-top: 25px;
  }

  .article-title-text {
    margin: 30px 0 20px;

    h1 {
      font-weight: bold;
      color: #333;
      font-size: 20px;
      line-height: 30px;
      max-height: 90px;
    }
  }

  .article-title-rtime {
    font-size: 12px;
    color: #888;
    margin-bottom: 13px;
  }

  .article-title-author-info {
    margin: 20px 0 40px;
    display: flex;
    align-items: center;

    .author-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }

    .author-name {
      font-size: 12px;
      color: #444;
      margin-left: 10px;
    }
  }
}

.article-footer {
  width: 100%;
  margin-top: 25px;
  padding-bottom: 30px;
  border-bottom: 1px solid #aaa;

  .article-tags {
    width: 100%;
  }

  .article-copyright {
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #bbb;
    margin-top: 30px;
    padding: 0 15px;
    user-select: none;
  }
}
</style>

<style lang="scss">

.article-body {
  width: 100%;

  p, li {
    font-size: 14px;
    margin-bottom: 14px;
    line-height: 28px;
    color: #666;
  }

  h2 {
    font-size: 22px;
    line-height: 32px;
    font-weight: bold;
    margin: 32px 0 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 28px 0 18px;
    color: #444;
    line-height: 26px;
  }

  .ss-img-wrapper {
    margin: 16px 0;
    width: 100% !important;
    text-align: center;

    img {
      width: 100%;
      position: relative;
    }

    figcaption {
      font-size: 12px;
      color: #888;
      margin-top: 15px;
      text-align: center;
    }
  }

  .ss-imgRows {
    display: flex;
    width: 100%;
    margin: 40px 0;

    img {
      width: 50%;
      padding-right: 12.7%;
      box-sizing: border-box;
    }
  }

  strong {
    font-weight: bold;
    color: #555;
  }

  ul {
    list-style: circle;
    padding-left: 25px;
  }

  a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid #666;

    u {
      text-decoration: none;
    }

    &:visited {
      border-bottom-color: #d71a1b;
    }
  }

  @media screen and (max-width: 479px) {
    .ss-img-wrapper img {
      max-width: calc(100% - 32px);
      min-width: calc(100% - 136px);
    }
  }
}
</style>