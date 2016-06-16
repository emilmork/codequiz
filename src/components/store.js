import { createStore, combineReducers } from 'redux';
import taskReducer from './taskReducer'

const store = createStore(taskReducer);

export default store;
