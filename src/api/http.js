import axios from 'axios'
import {HOST} from "@/api/Url";

export class Http {
    constructor(baseUrl) {
        this.instance = axios.create({
            baseURL: baseUrl
        });
    }

    request(url, method = 'GET', param = {}) {
        const options = {
            url,
            method
        };
        options[method === 'GET' ? 'params' : 'data'] = param;
        return this.instance.request(options);
    }

    get(url, param = {}) {
        return this.request(url, 'GET', param);
    }

    post(url, param = {}) {
        return this.request(url, 'POST', param);
    }
}

export default new Http(HOST);


