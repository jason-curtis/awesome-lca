import { RECEIVE_LCA } from '../actions/lca';


export default (
    state = {},
    action,
) => {
    const { type, payload } = action;
    switch (type) {
    case RECEIVE_LCA: {
        return payload;
    }
    default:
        return state;
    }
};
