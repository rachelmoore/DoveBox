import { RECEIVE_ALL_DOVES, RECEIVE_SINGLE_DOVE, REMOVE_DOVE } from '../actions/dove_actions';
import merge from 'lodash/merge';

const DoveReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_ALL_DOVES: 
            return merge({}, action.doves);
        case RECEIVE_SINGLE_DOVE:
            return merge({}, oldState, { [action.dove.id]: action.dove });
        case REMOVE_DOVE: 
            let newState = merge({}, oldState);
            delete newState[action.dove.id];
            return newState; 
        default: 
            return oldState;
    }
};

export default DoveReducer;