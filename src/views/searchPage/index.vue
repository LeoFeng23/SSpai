<template>
    <div class="search-page">
        <div class="search-box">
            <label for="searchInput" class="search-input-container">
                <i :class="`search-icon iconfont icon-search-2-line`"></i>
                <input type="text" id="searchInput" placeholder="搜索关键字">
            </label>
            <span class="cancel-button" @click="back">取消</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    methods: {
        back() {
            this.$router.back();
        }
    }
}
</script>

<style scoped lang="scss">
.search-page {
    padding: 5px 13px 0;
  .search-box {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;

    .search-input-container {
      display: flex;
      background-color: #eee;
      width: 82%;
      height: 100%;
      align-items: center;
      padding-left: 13px;

      .search-icon {
        font-size: 22px;
      }

      #searchInput {
        outline: none;
        border: none;
        background-color: transparent;
        height: 26px;
        width: 80%;
        padding: 0;
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .cancel-button {
      font-size: 14px;
    }
  }
}
</style>