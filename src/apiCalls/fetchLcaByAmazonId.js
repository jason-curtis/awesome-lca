// import apiRoot from './apiRoot';
// import standardFetch from './standardFetch';
import sleep from './sleep';
import fakeLca from './fakeLca';


function fetchLcaByAmazonId(amazonId) {
    return sleep(1000) // simulate server latency
        .then(
            () => fakeLca(`${amazonId}abceaweoibaofsben`)
        );

    // TODO: connect to actual data
    // return standardFetch(
    //     'get',
    //     `${apiRoot}v1/lca/${lcaId}`,
    // );
}

export default fetchLcaByAmazonId;
