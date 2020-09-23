import http from "@/api/http";
import {NEWS} from "@/api/Url";

export default {
    namespaced: true,
    state: {
        newsList: []
    },
    mutations: {
        refreshNewsList(state, payload) {
            state.newsList = payload
        }
    },
    actions: {
        async requestNewsData(store, payload) {
            const {status, data} = await http.get(NEWS);
            console.log(data)
            if (status >= 200 && status < 300) {
                const list = data.data.map((element) => ({
                    author: element.author,
                    avatar: element.avatar,
                    banner: element.banner,
                    corner: element.corner,
                    summary: element.summary,
                    title: element.title,
                    modify_time: element.modify_time,
                    comment_count: element.comment_count,
                    id: element.id,
                    like_count: element.like_count
                }));
                store.commit('refreshNewsList', list);
            } else {
                throw new Error("请求失败");
            }
        }
    }
}