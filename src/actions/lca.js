import createLcaApiCall from '../apiCalls/createOrUpdateLca';
import fetchLcaApiCall from '../apiCalls/fetchLca';

const REQUEST_LCA = 'REQUEST_LCA';
const RECEIVE_LCA = 'RECEIVE_LCA';


function receiveLcaAction(lca) {
    return {
        type: RECEIVE_LCA,
        payload: lca,
    };
}
function requestLcaAction(lcaId) {
    return {
        type: REQUEST_LCA,
        payload: {
            lcaId
        },
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
        dispatch(requestLcaAction(lcaId));

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
    return () => { // (dispatch, getState)
        console.log(`TODO: hook in to real data for ${amazonId}`);
        return Promise.resolve();
    };
}

export {
    REQUEST_LCA,
    RECEIVE_LCA,
    fetchOrCreateLcaIfNeeded,
    createLca,
    fetchLcaByAmazonId,
};
