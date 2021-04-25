import { request } from "../../api";
import { userUpdateAction } from "./userAction";
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";
import { SIGN_IN_SECTION } from "../constants";

/**
 * Async action.
 * 
 * @param {Object} candidateData {
 *                              nickname: string,
 *                              password: string
 *                          }
 * @returns {Object}
 */
export function userSignIn(candidateData) {
    return async function (dispatch, getState) {
        dispatch(asyncRequestAction(SIGN_IN_SECTION));
        try {
            const userData = await request.signIn(candidateData);

            dispatch(userUpdateAction(userData.payload));
            dispatch(asyncReceiveAction(SIGN_IN_SECTION, 'Добро пожаловать'));
        } catch (error) {
            dispatch(asyncErrorAction(SIGN_IN_SECTION, 'Ошибка авторизации'));
        } finally {
            setTimeout(() => dispatch(clearAsyncResponse(SIGN_IN_SECTION)), 3000);
        }
    }
}