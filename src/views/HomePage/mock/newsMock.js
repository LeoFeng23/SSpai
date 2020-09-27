import Mock from 'mockjs'
import {NEWS, PROGRAM} from "@/api/Url";
import result from "../../../../public/data/result";
import newsData from "../../../../public/data/article.js";
import MockUtil from "@/utils/MockUtil";

Mock.mock(new RegExp(NEWS), (options) => {
    result.data = newsData;
    result.total = newsData.length;
    const params = parse_url(options.url);
    console.log('参数', params)

    return result;
})

MockUtil.mockData(PROGRAM, '', () => {
    return require('../../../../public/data/program/programDigest/program').default;
})