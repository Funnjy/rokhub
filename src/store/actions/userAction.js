import { UPDATE_USER_DATA, SIGN_OUT } from "../constants"
import { request } from "../../api";

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
 * Exit from account.
 * 
 * @returns {Object}
 */
export function userSignOutAction() {
    return {
        type: SIGN_OUT,
        payload: {
            accessToken: null
        }
    }
}

export function updateTokensAction() {
    return async function(dispatch) {
        try {
            const tokensData = await request.updateTokens();

            dispatch(userUpdateAction({ ...tokensData.payload }));
        } catch(error) {
            dispatch(userUpdateAction({ accessToken: null, exp: null }));
        }
    }
}