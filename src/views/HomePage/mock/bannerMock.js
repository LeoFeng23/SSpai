import mock from 'mockjs'
import banner from "../../../../public/data/banner.json"

mock.mock(/\/recommend\/page\/get\?name=123/, (options) => {
    return banner;
});