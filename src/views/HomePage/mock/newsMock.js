import Mock from 'mockjs'
import {NEWS} from "@/api/Url";
import result from "../../../../public/data/result";
import newsData from "../../../../public/data/article.js";

Mock.mock(new RegExp(NEWS), (options) => {
    result.data = newsData;
    result.total = newsData.length;
    const params = parse_url(options.url);
    console.log('参数', params)

    return result;
})

function parse_url(url){ //定义函数
    const pattern = /(\w+)=(\w+)/ig;//定义正则表达式
    const params = {};//定义数组
    url.replace(pattern, function(a, b, c){
        params[b] = c;
    });
    return params;//返回这个数组.
}