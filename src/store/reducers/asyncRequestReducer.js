import { ASYNC_REQUEST, ASYNC_ERROR, ASYNC_RECEIVE, CLEAR_ASYNC_RESPONSE } from "../constants";

export function asyncRequestReducer(state = null, action) {
    switch(action.type) {
        case ASYNC_REQUEST:
            // console.log('request');
            return { ...state, ...action.payload };
        break;

        case ASYNC_RECEIVE:
            // console.log('receive');
            return { ...state, ...action.payload };
        break;

        case ASYNC_ERROR:
            // console.log('error');
            return { ...state, ...action.payload };
        break;

        case CLEAR_ASYNC_RESPONSE:
            const newState = { ...state };
            delete newState[action.payload.section];
            // console.log('clear');
            return newState;
        break;

        default: return state;
    }
}