// import apiRoot from './apiRoot';
// import standardFetch from './standardFetch';
import sleep from './sleep';
import fakeLca from './fakeLca';


function fetchLca(lcaId) {
    return sleep(2000) // simulate server latency
        .then(
            () => fakeLca(lcaId)
        );

    // TODO: connect to actual data
    // return standardFetch(
    //     'get',
    //     `${apiRoot}v1/lca/${lcaId}`,
    // );
}

export default fetchLca;
