import '../mock/MockAuthor'
import http from "@/api/http";
import {AUTHOR_INFO, AUTHOR_POSTS} from "@/api/Url";

export default {
    namespaced: true,
    state: {
        authorInfo: {},
        authorPostsList: {},
    },
    mutations: {
        refreshAuthorInfo(state, payload) {
            state.authorInfo = payload;
        },
        refreshAuthorPostsList(state, payload) {
            state.authorPostsList = payload;
            console.log(payload)
        },
    },
    actions: {
        async requestAuthorInfo(store, payload) {
            const {status, data} = await http.get(AUTHOR_INFO, {
                slug: payload.slug
            });
            if (status >= 200 && status < 300) {
                store.commit('refreshAuthorInfo', data.data);
            }
        },

        async requestAuthorPostsList(store, payload) {

            const {status, data} = await http.get(AUTHOR_POSTS, {
                slug: payload.slug
            });
            if (status >= 200 && status < 300) {
                console.log('post', data.data)
                store.commit('refreshAuthorPostsList', data.data);
            }
        }
    }
}