import React from 'react';
import {
    Route,
    Router,
    browserHistory,
} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '../store';
import { fetchOrCreateLcaIfNeeded } from '../actions/lca';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return module => cb(null, module.default);
}

const history = syncHistoryWithStore(browserHistory, store);


// Note: for webpack chunk-splitting / lazy loading to work,
// these System.import calls can't be factored out :/
export default () => (
    <Provider store={store}>
        <Router history={history}>
            <Route
                exact
                path="lca/:lcaId"
                getComponent={
                  (location, cb) => {
                      System.import('pages/Lca')
                          .then(loadRoute(cb))
                          .catch(errorLoading);
                  }
                }
                onEnter={
                    (location) => {
                        const { lcaId } = location.params;
                        store.dispatch(fetchOrCreateLcaIfNeeded(lcaId));
                    }
                }
            />
            <Route
                path="*"
                getComponent={
                    (location, cb) => {
                        System.import('pages/NotFound')
                            .then(loadRoute(cb))
                            .catch(errorLoading);
                    }
                }
            />
        </Router>
    </Provider>
);
