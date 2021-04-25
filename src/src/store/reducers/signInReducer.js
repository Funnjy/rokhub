import { SIGN_IN_REQUEST, SIGN_IN_RECEIVE, SIGN_IN_ERROR, SIGN_OUT, CLEAR_ASYNC_RESPONSE } from '../constants';

function userReducer(state = null, action) {
    switch(action.type) {
        case SIGN_IN_REQUEST:
            return { ...state, ...action.payload };
        break;

        case SIGN_IN_RECEIVE:
            return { ...state, ...action.payload };
        break;

        case SIGN_IN_ERROR:
            return { ...state, ...action.payload };
        break;

        case SIGN_OUT:
            return { ...state, ...action.payload };
        break;

        case CLEAR_ASYNC_RESPONSE:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}

export default userReducer;