import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_DOVES = 'RECEIVE_ALL_DOVES';
export const RECEIVE_SINGLE_DOVE = 'RECEIVE_SINGLE_DOVE';
export const REMOVE_DOVE = 'REMOVE_DOVE';


const receiveAllDoves = (doves) => ({
    type: RECEIVE_ALL_DOVES, 
    doves
});

const receiveSingleDove = (theeDove) => ({
    type: RECEIVE_SINGLE_DOVE,
    theeDove
});

const removeDove = (dove) => ({
    type: REMOVE_DOVE, 
    dove
});

export const fetchDoves = () => dispatch => (
    APIUtil.fetchAllDoves().then(doves => dispatch(receiveAllDoves(doves)))
);

export const fetchDove = (id) => dispatch => (
    APIUtil.fetchSingleDove(id).then(dove => dispatch(receiveSingleDove(dove)))
);

export const createDove = (dove) => dispatch => (
    APIUtil.createDove(dove)
);


export const deleteDove = (id) => dispatch => (
    APIUtil.deleteDove(id).then(dove => dispatch(removeDove(dove)))
);