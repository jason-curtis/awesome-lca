// import apiRoot from './apiRoot';
// import standardFetch from './standardFetch';
import sleep from './sleep';


function createOrUpdateLca(lca) {
    return sleep(1000) // simulate server latency
        .then(
            () => lca
        );
    // TODO: use actual data
    // return standardFetch(
    //     'PUT',
    //     `${apiRoot}v1/lca/`,
    //     {
    //         lca
    //     }
    // );
}

export default createOrUpdateLca;
