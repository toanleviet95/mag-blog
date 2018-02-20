import * as redux from 'redux';
import getListCards from 'Reducers/getListCards';
import { routerReducer } from 'react-router-redux';

const Reducers = redux.combineReducers({getListCards, routing: routerReducer});

module.exports = Reducers;