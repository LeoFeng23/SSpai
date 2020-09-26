import Mock from 'mockjs'

class MockUtil{
    constructor() {
    }

    mockData(url, paramName, callback) {
        const _this = this;
        Mock.mock(new RegExp(url), (options) => {
            return callback(_this.queryParam(options.url, paramName))
        })
    }

    queryParam(url, paramName) {
        const reg = new RegExp(`(^|\\?|&)${paramName}=([^#&]*)(&|$)`);
        return url.match(reg)[2];
    }
}

export default new MockUtil();