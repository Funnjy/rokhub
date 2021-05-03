import { ALLIANCES_RECEIVE, ALLIANCES_ERROR } from "../constants";

export default function alliancesReducer(state = null, action) {
    switch(action.type) {
        case ALLIANCES_RECEIVE:
            return { ...state, ...action.payload };
        break;

        case ALLIANCES_ERROR:
            return { ...state, ...action.payload };
        break;

        default: return state;
    }
}