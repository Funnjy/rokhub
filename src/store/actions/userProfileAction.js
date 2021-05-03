import { getUserProfile } from "../../api/getUserProfile";
import { USER_PROFILE_RECEIVE, USER_PROFILE_SECTION, USER_PROFILE_ERROR } from "../constants"
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";

/**
 * Get user profile.
 * 
 * @param {number} id 
 * @returns 
 */
export default function userProfile(id) {
    return async function (dispatch) {
        dispatch(asyncRequestAction(USER_PROFILE_SECTION));
        try {
            const userData = await getUserProfile(id);

            dispatch(userProfileRecieveAction(userData.payload));
            dispatch(asyncReceiveAction(USER_PROFILE_SECTION));
        } catch(error) {
            dispatch(userProfileErrorAction());
            dispatch(asyncErrorAction(USER_PROFILE_SECTION));
        } finally {
            dispatch(clearAsyncResponse(USER_PROFILE_SECTION));
        }
    }
}

function userProfileRecieveAction(userProfile) {
    return {
        type: USER_PROFILE_RECEIVE,
        payload: userProfile
    };
}

function userProfileErrorAction() {
    return {
        type: USER_PROFILE_ERROR
    };
}