import http from "@/api/http";
import {HOST, HOMEPAGE_BANNER} from "@/api/Url";
import axios from 'axios'
import programStore from "@/views/HomePage/store/programStore";


export default {
    namespaced: true,
    state: {
        bannerList: []
    },
    mutations: {
        refreshBannerList(state, payload) {
            state.bannerList = payload
        }
    },
    actions: {
        async requestBannerData(store, payload) {
            // const {status, data} =
            const {status, data} = await axios.get("/recommend/page/get?name=123", {
                ...payload
            });
            if (status >= 200 && status < 300) {
                const list = data.data.map((element) => ({
                    image: element.image,
                    title: element.title,
                    id: element.id
                }));
                store.commit('refreshBannerList', list);
            } else {
                throw new Error("请求失败");
            }
        }
    },
    modules: {
        programStore
    }
}