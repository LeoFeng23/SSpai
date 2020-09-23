import Vue from 'vue'
import Vuex from 'vuex'
import HomePageBanner from "@/views/HomePage/store/HomePageBanner";
import newsData from "@/views/HomePage/store/newsData";
import infoDetail from "@/views/InformationDetail/store/infoDetail";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    HomePageBanner,
    newsData,
    infoDetail
  }
})
