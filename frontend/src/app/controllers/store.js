import * as redux from 'redux';
import Reducers from 'Reducers/main';

const Store = redux.createStore(Reducers, redux.compose(
    // Check redux dev tool
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

// Log when store changed
// Store.subscribe(() => console.log(Store.getState()));

module.exports = Store;