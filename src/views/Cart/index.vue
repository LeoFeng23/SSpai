<template>
    <div class="message-page">
        <TopNav>
            <template #midBox>
                <span>消息</span>
            </template>
        </TopNav>
        <div class="message-nav">
            <router-link :to="{name: 'AuthorUpdates'}" class="message-nav-link" replace>
                <span class="link-text">通知</span>
            </router-link>
            <router-link :to="{name: 'AuthorPosts'}" class="message-nav-link" replace>
                <span class="link-text">私信</span>
            </router-link>
        </div>

        <div class="message-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import TopNav from "@/components/common/TopNav";
export default {
    name: "index",
    components: {TopNav}
}
</script>

<style scoped lang="scss">
.message-nav {
  position: absolute;
  width: 100%;
  display: flex;
  top: 40px;
  left: 0;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;

  .message-nav-link:nth-child(1) {
    margin-right: 100px;
  }

  .message-nav-link {
    text-decoration: none;
    color: #333;
    font-size: 14px;

    .link-text {
      display: block;
      padding: 12px 20px;
      border-bottom: 1px solid transparent;
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
</style>