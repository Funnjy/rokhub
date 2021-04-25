import { request } from '../../api';
import { CREATE_ALLIANCE_SECTION } from '../constants';
import { asyncErrorAction, asyncReceiveAction, asyncRequestAction, clearAsyncResponse } from "./asyncRequestAction";
import { userUpdateAction } from './userAction';

/**
 * Async action.
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

            dispatch(asyncReceiveAction(CREATE_ALLIANCE_SECTION, 'Альянс создан'));
            dispatch(userUpdateAction({ alliance: allianceData['tag'] }));
        } catch(error) {
            dispatch(asyncErrorAction(CREATE_ALLIANCE_SECTION, 'Ошибка создания альянса'));
        } finally {
            setTimeout(() => dispatch(clearAsyncResponse(CREATE_ALLIANCE_SECTION)), 3000);
        }
    }
}