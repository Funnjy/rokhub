import { SHOW_ALLIANCE, SHOW_ALLIANCE_ERROR } from "../constants";

function allianceReducer(state = null, action) {
    switch(action.type) {
        case SHOW_ALLIANCE:
            return { ...state, ...action.payload };
        break;

        case SHOW_ALLIANCE_ERROR:
            return { };
        break;

        default: return state;
    }
}

export { allianceReducer };