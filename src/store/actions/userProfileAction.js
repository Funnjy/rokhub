import { getUserProfile } from "../../api/getUserProfile";
import { SHOW_USER_PROFILE, SHOW_USER_SECTION, SHOW_USER_PROFILE_ERROR } from "../constants"
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Async action.
 * 
 * @param {string} id 
 * @returns 
 */
export default function userProfile(id) {
    return async function (dispatch) {
        dispatch(asyncRequestAction(SHOW_USER_SECTION));
        try {
            const userData = await getUserProfile(id);

            dispatch(userProfileRecieveAction(userData.payload));
            dispatch(asyncReceiveAction(SHOW_USER_SECTION));
        } catch(error) {
            dispatch(userProfileErrorAction());
            dispatch(asyncErrorAction(SHOW_USER_SECTION));
        } finally {
            dispatch(clearAsyncResponse(SHOW_USER_SECTION));
        }
    }
}

function userProfileRecieveAction(userProfile) {
    return {
        type: SHOW_USER_PROFILE,
        payload: userProfile
    };
}

function userProfileErrorAction() {
    return {
        type: SHOW_USER_PROFILE_ERROR
    };
}