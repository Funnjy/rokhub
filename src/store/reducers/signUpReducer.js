import { SIGN_UP_REQUEST, SIGN_UP_RECEIVE, SIGN_UP_ERROR, CLEAR_ASYNC_RESPONSE } from '../constants';

function userReducer(state = null, action) {
    switch(action.type) {
        case SIGN_UP_REQUEST:
            return { ...state, ...action.payload };
        break;

        case SIGN_UP_RECEIVE:
            return { ...state, ...action.payload };
        break;

        case SIGN_UP_ERROR:
            return { ...state, ...action.payload };
        break;

        case CLEAR_ASYNC_RESPONSE:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}

export default userReducer;