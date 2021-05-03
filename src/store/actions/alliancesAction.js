import { request } from "../../api";
import { ALLIANCES_SECTION, ALLIANCES_RECEIVE, ALLIANCES_ERROR } from "../constants";
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Get alliances.
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
        type: ALLIANCES_RECEIVE,
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
        type: ALLIANCES_ERROR,
        payload: {
            alliances: []
        }
    }
}