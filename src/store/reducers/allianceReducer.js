import { ALLIANCE_RECEIVE, ALLIANCE_ERROR } from "../constants";

export default function allianceReducer(state = null, action) {
    switch(action.type) {
        case ALLIANCE_RECEIVE:
            return { ...state, ...action.payload };
        break;

        case ALLIANCE_ERROR:
            return { };
        break;

        default: return state;
    }
}