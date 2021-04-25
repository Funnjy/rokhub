import { SHOW_ALLIANCES } from "../constants";

function alliancesReducer(state = null, action) {
    switch(action.type) {
        case SHOW_ALLIANCES:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}

export { alliancesReducer };