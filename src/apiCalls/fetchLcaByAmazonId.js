import apiRoot from './apiRoot';
import standardFetch from './standardFetch';


function fetchLcaByAmazonId(amazonId) {
    return standardFetch(
        'get',
        `${apiRoot}lca?amazonId=${amazonId}`,
    );
}

export default fetchLcaByAmazonId;
