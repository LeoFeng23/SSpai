<template>
    <div class="author-post-item">
        <div class="news-title-block">
            <!--            @click="toAuthorPage(newsItemData.author.slug)"-->
            <div class="author-info">
                <com-img :src="contentData.author.avatar" class="avatar"></com-img>
                <span class="author-name">{{ contentData.author.nickname }}</span>
            </div>
            <div class="article-handle">
                <span class="more-action-btn iconfont icon-more-fill"></span>
            </div>
        </div>
        <!--        @click="toDetailPage(newsItemData.id)"-->
        <div class="news-item-body">
            <div class="news-content">
                <div class="news-des">
                    <span class="news-des-text">
                        {{ contentData.title }}
                    </span>
                </div>
                <com-img :src="contentData.banner" class="news-banner"></com-img>
            </div>
            <div class="news-item-footer">
                <div class="comment-info">
                    <div class="like-count">
                        <i class="news-item-footer-icon iconfont icon-shoucang"></i>
                        <span class="like-count-num">{{ contentData.like_count }}</span>
                    </div>
                    <div class="sep">·</div>
                    <div class="comment-count">
                        <span class="comment-count-num">{{ contentData.comment_count }}</span>
                        <span class="comment-count-postfix">评论</span>
                    </div>
                </div>
                <div class="publish-time">
                    <i class="news-item-footer-refresh iconfont icon-refresh-line"></i>
                    <strong class="publish-time-hours">{{ sinceTime(contentData.modify_time) }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ComImg from "@/components/common/comImg";
import {mapState} from "vuex";

export default {
    name: "authorPostsItem",
    components: {ComImg},
    props: {
        contentData: {
            type: Object,
            required: true
        }
    },
    computed: {
    },
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

            console.log(timeDiff)
            if (timeDiff <= 2) {
                return timeDiff + "天前推荐过";
            } else {
                const t = new Date(time);
                return (t.getMonth() + 1) + "月" + t.getDate() + "日";

            }
        },
    }
}
</script>

<style scoped lang="scss">

.author-post-item {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

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
    display: flex;
    justify-content: space-between;

    .news-des {
      font-size: 14px;
      width: 70%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 10px;

      .news-des-text {
        display: block;
        line-height: 20px;
        max-height: 40px;
        overflow: hidden;
      }
    }

    .news-banner {
      border-radius: 5px;
      overflow: hidden;
      width: 40%;
      height: 70px;
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