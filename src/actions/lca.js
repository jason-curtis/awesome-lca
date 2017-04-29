import createLcaApiCall from '../apiCalls/createOrUpdateLca';
import fetchLcaApiCall from '../apiCalls/fetchLca';
import fetchLcaByAmazonIdApiCall from '../apiCalls/fetchLcaByAmazonId';


const RECEIVE_LCA = 'RECEIVE_LCA';


function receiveLcaAction(lca) {
    return {
        type: RECEIVE_LCA,
        payload: lca,
    };
}

function createLca(lca) {
    return dispatch =>
        createLcaApiCall(lca)
            .then((responseJson) => {
                dispatch(receiveLcaAction(responseJson));
                return responseJson;
            });
}


function fetchOrCreateLca(lcaId) {
    return (dispatch) => {
        fetchLcaApiCall(lcaId)
            .then(lca => dispatch(receiveLcaAction(lca)))
            .catch((e) => {
                console.log('here I am', e);
                // return dispatch(createLca({ id: lcaId }));
            });
    };
}


function shouldFetchLca(state, lcaId) {
    return !(state.lca[lcaId] && state.lca[lcaId].isLoaded);
}

function fetchOrCreateLcaIfNeeded(lcaId) {
    return (dispatch, getState) => {
        if (shouldFetchLca(getState(), lcaId)) {
            return dispatch(
                fetchOrCreateLca(lcaId)
            );
        }
        return Promise.resolve();
    };
}

function fetchLcaByAmazonId(amazonId) {
    return (dispatch) => {
        fetchLcaByAmazonIdApiCall(amazonId)
            .then(lca => dispatch(receiveLcaAction(lca)));
        return Promise.resolve();
    };
}

export {
    RECEIVE_LCA,
    fetchOrCreateLcaIfNeeded,
    createLca,
    fetchLcaByAmazonId,
};
