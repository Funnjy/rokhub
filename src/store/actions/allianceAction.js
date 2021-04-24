import { request } from "../../api";
import { ALLIANCE_SECTION, SHOW_ALLIANCE, SHOW_ALLIANCE_ERROR } from "../constants"
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Async action.
 * 
 * @param {string} id 
 * @returns {Object}
 */
export function alliance(id) {
    return async function (dispatch) {
        dispatch(asyncRequestAction(ALLIANCE_SECTION));
        try {
            const allianceData = await request.getAlliance(id);

            dispatch(allianceReceiveAction(allianceData.payload));
            dispatch(asyncReceiveAction(ALLIANCE_SECTION));
        } catch(error) {
            dispatch(allianceErrorAction());
            dispatch(asyncErrorAction(ALLIANCE_SECTION));
        } finally {
            dispatch(clearAsyncResponse(ALLIANCE_SECTION));
        }
    }
}

/**
 * Get an alliance from server.
 * 
 * @param {Object} alliance 
 * @returns 
 */
function allianceReceiveAction(alliance) {
    return {
        type: SHOW_ALLIANCE,
        payload: alliance
    }
}

/**
 * Async error action.
 * Return empty alliance object.
 * 
 * @returns {Object}
 */
function allianceErrorAction() {
    return {
        type: SHOW_ALLIANCE_ERROR
    }
}