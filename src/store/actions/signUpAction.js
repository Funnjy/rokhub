import { request } from "../../api";
import { SIGN_UP_SECTION } from "../constants";
import { asyncErrorAction, asyncRequestAction, asyncReceiveAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Async action.
 * 
 * @param {Object} candidateData {
 *                              nickname: string,
 *                              governorId: string,
 *                              password: string,
 *                              repeatPassword: string,
 *                              email: string
 *                          }
 * @returns {function}
 */
export function userSignUp(candidateData) {
    return async function (dispatch, getState) {
        dispatch(asyncRequestAction(SIGN_UP_SECTION));
        try {
            await request.signUp(candidateData);
            dispatch(asyncReceiveAction(SIGN_UP_SECTION, 'Регистрация прошла успешно. Перейдите к авторизации.'));
        } catch (error) {
            dispatch(asyncErrorAction(SIGN_UP_SECTION, 'Ошибка регистрации.'));
        } finally {
            setTimeout(() => dispatch(clearAsyncResponse(SIGN_UP_SECTION)), 3000);
        }
    }
}