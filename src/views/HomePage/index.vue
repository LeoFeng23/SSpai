<template>
    <div>
        <TopNav>
            <template #leftBox>
            </template>
            <template #midBox>
                <span>首页</span>
            </template>
            <template #rightBox>
                <span :class="`button-right iconfont icon-search-2-line`" @click="toSearchPage"></span>
            </template>
        </TopNav>
        <div class="inner-content" ref="pageInner">
            <!--            <img src="https://cdn.sspai.com/article/b46bbe08-e7f6-d540-c9db-c293859791de.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1" alt="">-->
            <div class="page-inner">
                <div class="banner">
                    <swiper class="banner-container" ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="item in bannerList" :key="item.id" class="banner-item">
                            <com-img :src="item.image" :postfix="imagePostfix" :is-lazy-load="false"
                                     class="banner-item-img"></com-img>
                        </swiper-slide>
                    </swiper>
                </div>
                <news></news>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from "@/components/common/TopNav";
import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ComImg from "@/components/common/comImg";
import {mapState} from "vuex";
import news from "@/views/HomePage/children/news";
import IScroll from 'iscroll/build/iscroll-probe'

export default {
    name: "index",
    components: {
        ComImg,
        TopNav,
        Swiper,
        SwiperSlide,
        news
    },
    data() {
        return {
            swiperOptions: {
                // 容器内一次显示两个slide
                slidesPerView: 1.4,
                // 每两个slide的间距
                spaceBetween: 15,
                // 将主要的slide显示在中间
                centeredSlides: true,
                // // 开启无限循环
                loop: true,
                // loopAdditionalSlides: 3
                // on: {
                //     progress(swiper, progress) {
                //         // console.log(progress * this.width * (this.slides.length - 1))
                //     }
                // }
            },
            imagePostfix: '?imageMogr2/auto-orient/quality/95/thumbnail/!1230x540r/gravity/Center/crop/1230x540/interlace/1',
            iscroll: {}
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
        ...mapState({
            bannerList: state => state.HomePageBanner.bannerList,
        })
    },
    mounted() {
        this.$store.dispatch("HomePageBanner/requestBannerData", {
            offset: 0,
            limit: 5,
            type: 'home_main'
        })
        this.swiper.slideTo(2);

        this.iscroll = new IScroll(this.$refs.pageInner, {
            bounce: true,
            click: true,
            tap: true,
            probeType: 3
        });

        this.iscroll.on('beforeScrollStart', () => {
            this.iscroll.refresh();
        });

    },
    methods: {
        toSearchPage() {
            this.$router.push({
                path: '/search'
            })
        }
    }
}
</script>

<style scoped lang="scss">

.inner-content {
  position: absolute;
  top: 40px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 5px;
}

.banner {
  width: 100%;
  height: 125px;

  .banner-container {
    height: 100%;
    width: 100%;

    .banner-item {
      border-radius: 10px;
      overflow: hidden;

      .banner-item-img {
        width: 100%;
        height: 100%;
      }

    }

  }
}
</style>

<style>
.swiper-slide-prev, .swiper-slide-next {
    transform: scale(0.9);
}
</style>