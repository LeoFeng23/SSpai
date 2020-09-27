import {AUTHOR_INFO, AUTHOR_POSTS} from "@/api/Url";
import MockUtil from "@/utils/MockUtil";
import defaultAuthorInfo from '../../../../public/data/author/authorInfo/ee0vj778'


MockUtil.mockData(AUTHOR_INFO, 'slug', (data) => {
    // if (data) {
    //     let result;
    //     await import(`../../../../public/data/author/authorInfo/${data}.js`).then(module => {
    //         console.log(module);
    //         result = module
    //     }).catch(e => {
    //         result = require(`../../../../public/data/author/authorInfo/ee0vj778.js`);
    //     });
    //     return result;
    // }
    // return '';
    let result;
    // import(`../../../../public/data/author/authorInfo/${data}`).then(module => {
    //     result = module.default;
    // }).catch(e => {
    //     result = defaultAuthorInfo
    // })

    try {
        result = require(`../../../../public/data/author/authorInfo/${data}`);
    } catch (e) {
        result = require(`../../../../public/data/author/authorInfo/ee0vj778`);
    }
    return result.default;
});

MockUtil.mockData(AUTHOR_POSTS, 'slug', (data) => {
    if (data) {
        let result;
        // try {
        //     import(`../../../../public/data/author/posts/${data}.js`).then(module => {
        //         console.log(module);
        //         result = module
        //     });
        // } catch (e) {
        //     result = require(`../../../../public/data/author/posts/ee0vj778.js`);
        // }

        try {
            result = require(`../../../../public/data/author/posts/${data}`);
        } catch (e) {
            result = require(`../../../../public/data/author/posts/ee0vj778`);
        }
        return result.default;
    }
    return '';
});