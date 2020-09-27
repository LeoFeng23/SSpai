import MockUtil from "@/utils/MockUtil";
import {DISCOVER_DIGEST} from "@/api/Url";

MockUtil.mockData(DISCOVER_DIGEST, '', () => {
    return require('../../../../public/data/discover/digest/discover').default;
})