import { request } from "../../api";
import { SIGN_IN_SECTION, SIGN_UP_SECTION, UPDATE_USER_DATA } from "../constants";
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Sign in.
 * 
 * @param {Object} candidateData {
 *                                    nickname: string,
 *                                    password: string
 *                               }
 * @returns {Object}
 */
 export function userSignIn(candidateData) {
    return async function (dispatch) {
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

/**
 * Sign up.
 * 
 * @param {Object} candidateData {
 *                                    nickname: string,
 *                                    governorId: string,
 *                                    password: string,
 *                                    repeatPassword: string,
 *                                    email: string
 *                               }
 * @returns {function}
 */
 export function userSignUp(candidateData) {
    return async function (dispatch) {
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

/**
 * Update user state.
 * 
 * @param {Object} userData
 * @returns 
 */
export function userUpdateAction(userData) {
    return {
        type: UPDATE_USER_DATA,
        payload: userData
    }
}

/**
 * Update access token.
 * 
 * @returns 
 */
export function updateTokensAction() {
    return async function(dispatch) {
        try {
            const tokensData = await request.updateTokens();

            dispatch(userUpdateAction({ ...tokensData.payload }));
        } catch(error) {
            console.log(error);
            dispatch(userUpdateAction({ accessToken: null, exp: null }));
        }
    }
}