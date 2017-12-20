import { combineReducers } from 'redux';
import DoveReducer from './dove_reducer';

export default combineReducers({
    doves: DoveReducer
});