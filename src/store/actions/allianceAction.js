import { request } from "../../api";
import { ALLIANCE_SECTION, ALLIANCE_RECEIVE, ALLIANCE_ERROR, CREATE_ALLIANCE_SECTION, EDIT_ALLIANCE_SECTION } from "../constants"
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";
import { userUpdateAction } from './userAction';

/**
 * Get the alliance.
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
 * Create the alliance.
 * 
 * @param {Object} allianceData {
 *                                  tag: string,
 *                                  name: string,
 *                                  description: string
 *                              }
 * @returns {Object}
 */
 export function createAlliance(allianceData) {
    return async function(dispatch) {
        dispatch(asyncRequestAction(CREATE_ALLIANCE_SECTION));
        try {
            await request.createAlliance(allianceData);

            dispatch(userUpdateAction({ alliance: allianceData['tag'] }));
            dispatch(asyncReceiveAction(CREATE_ALLIANCE_SECTION, 'Альянс создан'));
        } catch(error) {
            dispatch(asyncErrorAction(CREATE_ALLIANCE_SECTION, 'Ошибка создания альянса'));
        } finally {
            setTimeout(() => dispatch(clearAsyncResponse(CREATE_ALLIANCE_SECTION)), 3000);
        }
    }
}

/**
 * Edit the alliance.
 * 
 * @param {Object} allianceData {
 *                                   id: number,
 *                                   tag: string,
 *                                   name: string,
 *                                   description: string
 *                              }
 * @returns 
 */
export function editAlliance(allianceData) {
    return async function (dispatch) {
        dispatch(asyncRequestAction(EDIT_ALLIANCE_SECTION));
        try {
            await request.editAlliance(allianceData);
            dispatch(allianceReceiveAction(allianceData));
            dispatch(asyncReceiveAction(EDIT_ALLIANCE_SECTION, 'Изменения сохранены'));
        } catch(error) {
            dispatch(asyncErrorAction(EDIT_ALLIANCE_SECTION, 'Произошла ошибка'));
        } finally {
            setTimeout(() => dispatch(clearAsyncResponse(EDIT_ALLIANCE_SECTION)), 3000);
        }
    }
}

/**
 * Get the alliance from server.
 * 
 * @param {Object} alliance 
 * @returns 
 */
function allianceReceiveAction(alliance) {
    return {
        type: ALLIANCE_RECEIVE,
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
        type: ALLIANCE_ERROR
    }
}