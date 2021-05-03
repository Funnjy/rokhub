import { USER_PROFILE_RECEIVE, USER_PROFILE_ERROR } from "../constants";

export default function userProfileReducer(state = null, action) {
    switch(action.type) {
        case USER_PROFILE_RECEIVE:
            return { ...state, ...action.payload };
        break;

        case USER_PROFILE_ERROR:
            return { };
        break;

        default: return state;
    }
}