import {AUTHOR_INFO, AUTHOR_POSTS} from "@/api/Url";
import MockUtil from "@/utils/MockUtil";

MockUtil.mockData(AUTHOR_INFO, 'slug', (data) => {
    if (data) {
        let result;
        try {
            result = require(`../../../../public/data/author/authorInfo/${data}.json`);
        } catch (e) {
            result = require(`../../../../public/data/author/authorInfo/ee0vj778.json`);
        }
        return result;
    }
    return '';
});

MockUtil.mockData(AUTHOR_POSTS, 'slug', (data) => {
    if (data) {
        let result;
        try {
            // const file = require(`../../../../public/data/author/posts/ng0377i5.json`);
            // console.log(file)
            result = require(`../../../../public/data/author/posts/${data}.json`);
        } catch (e) {
            console.log(e)
            result = require(`../../../../public/data/author/posts/ee0vj778.json`);
        }
        console.log(data, result)
        return result;
    }
    return '';
});