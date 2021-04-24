import { UPDATE_USER_DATA, SIGN_OUT } from "../constants";

export function userReducer(state = null, action) {
    switch(action.type) {
        case UPDATE_USER_DATA:
            return { ...state, ...action.payload };
        break;

        case SIGN_OUT:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}