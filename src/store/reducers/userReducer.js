import { UPDATE_USER_DATA } from "../constants";

export default function userReducer(state = null, action) {
    switch(action.type) {
        case UPDATE_USER_DATA:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}