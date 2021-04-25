import { SHOW_USER_PROFILE, SHOW_USER_PROFILE_ERROR } from "../constants";

export function userProfileReducer(state = null, action) {
    switch(action.type) {
        case SHOW_USER_PROFILE:
            return { ...state, ...action.payload };
        break;

        case SHOW_USER_PROFILE_ERROR:
            return { };
        break;

        default: return state;
    }
}