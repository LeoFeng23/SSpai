import http from "@/api/http";
import {ARTICLE_DETAIL} from "@/api/Url";

import '../mock/mockArticleData'

export default {
    namespaced: true,
    state: {
        articleData: {}
    },
    mutations: {
        initArticleData(state, payload) {
            state.articleData = payload;
        }
    },
    actions: {
        async requestArticleData(store, payload) {
            const {status, data} = await http.get(ARTICLE_DETAIL, {
                id: payload.id,
                view: 'second'
            })

            if (status >= 200 && status < 300) {
                store.commit('initArticleData', data.data);
                console.log(data)
            }
        }
    }
}