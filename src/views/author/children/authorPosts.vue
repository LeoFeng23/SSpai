<template>
    <div class="user-posts" ref="userPosts">
        <div class="scroll-box">
            <author-posts-item v-for="item in authorPostsList" :key="item.id" :content-data="item"></author-posts-item>
        </div>
    </div>
</template>

<script>
import AuthorPostsItem from "@/views/author/children/authorPostsItem";
import IScroll from "iscroll/build/iscroll-probe";
import {mapState} from "vuex";

export default {
    name: "userPosts",
    components: {AuthorPostsItem},
    data() {
        return {
            hasLoaded: false
        }
    },
    props: {},
    methods: {
        initIscroll() {
            const scroll = new IScroll(this.$refs.userPosts, {
                tap: true,
                click: true,
                probeType: 3
            });

            scroll.on('beforeScrollStart', () => {
                scroll.refresh();
            });
        }
    },
    computed: {
        ...mapState({
            authorPostsList: state => state.authorStoreModule.authorPostsList.data
        })
    },
    created() {
        console.log(this.$route.params.slug)
        this.$store.dispatch('authorStoreModule/requestAuthorPostsList', {
            slug: this.$route.params.slug
        }).then(resolve => {
            this.hasLoaded = true;
        }).then(() => {
            this.initIscroll();
        }).catch((reject) => {
            this.hasLoaded = false;
        })
    },
}
</script>

<style scoped lang="scss">
.user-posts {
  padding: 5px 13px 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .scroll-box {
    padding: 5px 0 10px;
  }
}
</style>