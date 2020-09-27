import http from "@/api/http";
import {DISCOVER_DIGEST} from "@/api/Url";
import '../mock/mockDiscover'

export default  {
    namespaced: true,
    state: {
        discoverDigest: []
    },
    mutations: {
        refreshDiscoverDigest(state, payload) {
            state.discoverDigest = payload
        }
    },
    actions: {
        async requestDiscoverDigest(store, payload) {
            const {status, data} = await http.get(DISCOVER_DIGEST, {});
            if (status >= 200 && status < 300) {
                console.log(data);
                store.commit('refreshDiscoverDigest', data.data);
            } else {
                throw new Error("请求失败");
            }
        }
    },
}