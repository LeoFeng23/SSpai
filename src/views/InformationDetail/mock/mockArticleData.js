import Mock from 'mockjs'
import {ARTICLE_DETAIL} from "@/api/Url";


Mock.mock(new RegExp(ARTICLE_DETAIL), (options) => {
    const id = options.url.match(/(^|\?|&)id=([^#&]*)(&|$)/)[2];

    let data;
    try {
        data = require('../../../../public/data/articleDetail/' + id + '.json');
    } catch (e) {
        console.log(e.message);
        data = require('../../../../public/data/articleDetail/62761.json')
    }

    return data;
})