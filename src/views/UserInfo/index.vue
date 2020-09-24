<template>
    <div class="user-info">
        <div class="user-no-login-block">
            <div class="no-login-avatar">
                <div class="avatar-icon iconfont icon-user-3-fill"></div>
            </div>
            <div class="login-hint">
                <div class="user-nickname">
                    <strong>登录</strong>
                </div>

                <div class="user-info-des">
                    <p>登录以后更多功能</p>
                </div>
            </div>
        </div>
        <div class="button-to-user-homepage">
            <choose-item content-text="个人主页"></choose-item>
        </div>

        <div class="shop-block">
            <choose-item content-text="已购内容"></choose-item>
            <choose-item content-text="我的优惠券"></choose-item>
            <choose-item content-text="我的收藏"></choose-item>
        </div>

        <div class="common-service">
            <choose-item content-text="反馈和帮助"></choose-item>
            <choose-item content-text="设置"></choose-item>
        </div>
    </div>
</template>

<script>
import ChooseItem from "@/views/UserInfo/children/ChooseItem";
export default {
    name: "index",
    components: {ChooseItem}
}
</script>

<style scoped lang="scss">
.user-info {
  width: 100%;
  height: 100%;
  background-color: #eee;

  .user-no-login-block {
    padding: 20px 15px;
    background-color: #fff;
    display: flex;

    .no-login-avatar {
      border-radius: 50%;
      height: 50px;
      width: 50px;
      background-color: #aaa;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .avatar-icon {
        color: #FbFbFb;
        font-size: 42px;
        transform: translateY(4px);
      }
    }

    .login-hint {
      margin-left: 20px;
      padding-top: 5px;
      width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;


      .user-nickname {
        strong {
          font-weight: bold;
          font-size: 14px;
        }
      }

      .user-info-des {
        transform: scale(0.92) translateX(-5px);
        font-size: 12px;
        color: #bbb;
        position: relative;

      }
    }

  }
  .button-to-user-homepage {
    margin: 5px 0;
  }

  .shop-block {
    margin-bottom: 5px;
  }
}

</style>