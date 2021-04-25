import { CREATE_ALLIANCE_REQUEST, CREATE_ALLIANCE_RECEIVE, CREATE_ALLIANCE_ERROR, CLEAR_ASYNC_RESPONSE } from '../../store/constants';

function createAllianceReducer(state = null, action) {
    switch(action.type) {
        case CREATE_ALLIANCE_REQUEST:
            return { ...state, ...action.payload };
        break;

        case CREATE_ALLIANCE_RECEIVE:
            return { ...state, ...action.payload };
        break;

        case CREATE_ALLIANCE_ERROR:
            return { ...state, ...action.payload };
        break;

        case CLEAR_ASYNC_RESPONSE:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}

export { createAllianceReducer };