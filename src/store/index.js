import Vue from 'vue'
import Vuex from 'vuex'
import HomePageBanner from "@/views/HomePage/store/HomePageBanner";
import newsData from "@/views/HomePage/store/newsData";

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
    newsData
  }
})
