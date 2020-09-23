<template>
    <div class="img-box">
        <img class="custom-img" alt="" src="" v-lazy="imgSrc" v-if="isLazyLoad">
        <img class="custom-img" alt="" :src="imgSrc" v-if="!isLazyLoad">
    </div>
</template>

<script>
import {IMG_CDN} from "@/api/Url";
import vueLazyLoad from 'vue-lazyload'
import Vue from "vue";

Vue.use(vueLazyLoad)

export default {
    name: "comImg",
    props: {
        src: {
            type: String,
            default: ""
        },
        postfix: {
            type: String,
            default: ""
        },
        isLazyLoad: {
            type: Boolean,
            default: true
        },
        withPrefix: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        imgSrc() {
            if (!this.src) {
                return "";
            } else if (this.withPrefix){
                return IMG_CDN + this.src + this.postfix
            } else {
                return this.src + this.postfix
            }
        }
    }
}
</script>

<style scoped lang="scss">
.img-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .custom-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
}
</style>