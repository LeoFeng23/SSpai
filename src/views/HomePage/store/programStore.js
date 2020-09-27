import http from "@/api/http";
import {PROGRAM} from "@/api/Url";


export default {
    namespaced: true,
    state: {},
    mutations: {

    },
    actions: {
        async requestProgramList(store, payload) {
            const {status, data} = await http.get(PROGRAM, {});
            if (status >= 200 && status < 300) {
                console.log(data);
            }
        }
    }
}