<template>
    <router-link :to="to" class="bottom-nav-item">
        <span :class="`iconfont icon-${icon}`"></span>
    </router-link>
</template>

<script>
export default {
    name: "BottomNavItem",
    props: {
        to: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default: ""
        },
    },
    data() {
        return {
        }
    },
    computed: {

    },
    methods: {
    },
    watch: {
    },
    mounted() {
    }

}
</script>

<style scoped lang="scss">
.bottom-nav-item {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #222;
  text-decoration: none;

  .iconfont {
    font-size: 20px;
  }
}
</style>