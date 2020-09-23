<template>
    <slot></slot>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
name: "MySwiper",
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    }
}
</script>

<style scoped>

</style>