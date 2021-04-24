import { request } from "../../api";
import { ALLIANCES_SECTION, SHOW_ALLIANCES } from "../constants";
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Async action.
 * 
 * @returns {Object}
 */
 export function alliances() {
    return async function(dispatch) {
        dispatch(asyncRequestAction(ALLIANCES_SECTION));
        try {
            const alliancesData = await request.getAlliances();
            
            dispatch(alliancesReceiveAction(alliancesData));
            dispatch(asyncReceiveAction(ALLIANCES_SECTION));
        } catch(error) {
            dispatch(alliancesErrorAction());
            dispatch(asyncErrorAction(ALLIANCES_SECTION));
        } finally {
            dispatch(clearAsyncResponse(ALLIANCES_SECTION));
        }
    }
}

/**
 * This action is executed by positive request.
 * 
 * @param {Object} alliances 
 * @returns {Object}
 */
function alliancesReceiveAction(alliances) {
    return {
        type: SHOW_ALLIANCES,
        payload: {
            alliances: alliances.payload.alliances
        }
    }
}

/**
 * This action is executed by negative request.
 * 
 * @returns {Object}
 */
function alliancesErrorAction() {
    return {
        type: SHOW_ALLIANCES,
        payload: {
            alliances: []
        }
    }
}