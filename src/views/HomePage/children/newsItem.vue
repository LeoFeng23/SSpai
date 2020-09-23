<template>
    <div class="news-item" v-if="newsItemData.author">
        <div class="news-title-block">
            <div class="author-info" @click="toAuthorPage(newsItemData.author.slug)">
                <com-img :src="newsItemData.author.avatar" class="avatar"></com-img>
                <span class="author-name">{{ newsItemData.author.nickname }}</span>
            </div>
            <div class="article-handle">
                <span class="more-action-btn iconfont icon-more-fill"></span>
            </div>
        </div>
        <div class="news-item-body" @click="toDetailPage(newsItemData.id)">
            <div class="news-content">
                <com-img :src="newsItemData.banner" class="news-banner"></com-img>
                <div class="news-title-text">
                    {{ newsItemData.title }}
                </div>
                <div class="news-summary-text">
                    {{ newsItemData.summary }}
                </div>
            </div>
            <div class="news-item-footer">
                <div class="comment-info">
                    <div class="like-count">
                        <i class="news-item-footer-icon iconfont icon-shoucang"></i>
                        <span class="like-count-num">{{ newsItemData.like_count }}</span>
                    </div>
                    <div class="sep">·</div>
                    <div class="comment-count">
                        <span class="comment-count-num">{{ newsItemData.comment_count }}</span>
                        <span class="comment-count-postfix">评论</span>
                    </div>
                </div>
                <div class="publish-time">
                    <i class="news-item-footer-refresh iconfont icon-refresh-line"></i>
                    <strong class="publish-time-hours">{{ sinceTime(newsItemData.modify_time) }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ComImg from "@/components/common/comImg";

export default {
    name: "newsItem",
    components: {ComImg},
    props: {
        newsItemData: {
            type: Object,
            required: true
        }
    },
    computed: {},
    methods: {
        sinceTime: function (time) {
            let timeDiff = Date.now() - (time = time * 1000);
            let timeLeft = 0;  // 留存最近一次计算的有效结果
            timeDiff = Math.floor(timeDiff / 1000); // 过滤毫秒的影响

            timeLeft = timeDiff % 60;// 计算秒数
            timeDiff = Math.floor(timeDiff / 60);
            if (timeDiff === 0) {
                return "1分钟前推荐过";
            }
            timeLeft = timeDiff % 60;// 计算分钟数
            timeDiff = Math.floor(timeDiff / 60);
            if (timeDiff === 0) {
                return timeLeft + "分钟前推荐过";
            }
            timeLeft = timeDiff % 24;// 计算小时
            timeDiff = Math.floor(timeDiff / 24);
            if (timeDiff === 0) {
                return timeLeft + "小时前推荐过";
            }
            if (timeDiff <= 2) {
                return timeDiff + "天前推荐过";
            } else {
                const t = new Date(time);
                return (t.getMonth() + 1) + "月" + t.getDate() + "日";

            }
        },
        toDetailPage(id) {
            this.$router.push({
                path: `/post/${id}`
            });
        },
        toAuthorPage(slug) {
            this.$router.push({
                path: `/author/${slug}`
            })
        }
    }
}
</script>

<style scoped lang="scss">
.news-item {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0 15px;
  border-radius: 20px;


  .news-title-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .author-info {
      display: flex;
      align-items: center;

      .avatar {
        border-radius: 50%;
        overflow: hidden;
        width: 30px;
        height: 30px;
      }

      .author-name {
        font-size: 12px;
        margin-left: 10px;
      }
    }

    .more-action-btn {
      font-size: 20px;
      color: #999;
    }

  }

  .news-content {

    width: 100%;

    .news-banner {
      border-radius: 5px;
      overflow: hidden;
      width: 100%;
      height: 125px;
    }

    .news-title-text {
      padding: 5px 0 4px;
      font-size: 14px;
      color: #111;
      min-height: 1.2em;
      line-height: 22px;
      margin-top: 6px;
      font-weight: bold;
      word-break: break-word;
      word-wrap: break-word;
      max-height: 2.8em;
      overflow: hidden;
    }

    .news-summary-text {
      padding: 4px;
      font-size: 12px;
      color: #999;
      min-height: 1.2em;
      line-height: 18px;
      word-break: break-word;
      word-wrap: break-word;
      max-height: 2.6em;
      overflow: hidden;
    }
  }

  .news-item-footer {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;

    .comment-info {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #333;
      transform: scale(0.84);

      .sep {
        margin: 0 5px;
      }

      .like-count {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .like-count-num {
          margin-left: 3px;
        }

        .news-item-footer-icon {
          font-size: 14px;
          transform: translateX(-6px);
          color: #666;
        }
      }

      .comment-count {
        .comment-count-num {
          margin-right: 4px;
        }
      }
    }

    .publish-time {
      font-size: 12px;
      transform: scale(0.92);
      color: #aaa;

      .publish-time-hours {
        margin-left: 8px;
      }

      .news-item-footer-refresh {
        font-size: 14px;
      }
    }
  }
}
</style>