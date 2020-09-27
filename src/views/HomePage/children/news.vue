<template>
    <div id="newsBlock">
        <news-item :newsItemData="firstNewsItem"></news-item>
        <charge-program></charge-program>
        <news-item v-for="element in newsDataList" :newsItemData="element" :key="element.id"></news-item>
    </div>
</template>

<script>
import NewsItem from "@/views/HomePage/children/newsItem";
import ChargeProgram from "@/views/HomePage/children/chargeProgram";
import {mapState} from "vuex";

export default {
    name: "news",
    components: {ChargeProgram, NewsItem},
    data() {
        return {
            firstNewsItem: {},
            newsDataList: {},
            programLoaded: false
        }
    },
    computed: {
        ...mapState({
                newsList: state => state.newsData.newsList
            }
        ),
    },
    watch: {},
    created() {
        this.$store.dispatch("newsData/requestNewsData", {}).then(resolve => {
            this.newsDataList = JSON.parse(JSON.stringify(this.newsList));
            this.firstNewsItem = this.newsDataList.splice(0, 1)[0];
        });
        this.$store.dispatch('HomePageBanner/programStore/requestProgramList', {})
            .then(() => {
                this.programLoaded = true;
            })
    },
    mounted() {

    }

}
</script>

<style scoped lang="scss">
#newsBlock {
    width: 100%;
    height: 100%;
    //padding: 0 13px 0;
    padding: 0 13px;
    box-sizing: border-box;
}

</style>