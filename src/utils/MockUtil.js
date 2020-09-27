import Mock from 'mockjs'

class MockUtil{
    constructor() {
    }

    mockData(url, paramName, callback) {
        const _this = this;
        Mock.mock(new RegExp(url), (options) => {
            // let returnData;
            return callback(_this.queryParam(options.url, paramName));
        })
    }

    queryParam(url, paramName) {
        if (!paramName) {
            return '';
        }
        const reg = new RegExp(`(^|\\?|&)${paramName}=([^#&]*)(&|$)`);
        return url.match(reg)[2];
    }
}

export default new MockUtil();