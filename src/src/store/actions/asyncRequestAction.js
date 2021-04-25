import { CLEAR_ASYNC_RESPONSE, ASYNC_REQUEST, ASYNC_RECEIVE, ASYNC_ERROR } from "../constants";

/**
 * This action shows spinner of loading
 * 
 * @param {string} section
 * @returns {Object}
 */
export function asyncRequestAction(section) {
    return {
        type: ASYNC_REQUEST,
        payload: {
            [section]: {
                isFetching: true
            }
        }
    }
}

/**
 * This action is executed by positive request.
 * 
 * @param {string} section 
 * @param {string} message 
 * @param {boolean} result 
 * @returns {Object}
 */
export function asyncReceiveAction(section, message = 'Успешно', result = true) {
    return {
        type: ASYNC_RECEIVE,
        payload: {
            [section]: {
                isFetching: false,
                result,
                message
            }
        }
    }
}

/**
 * This action is executed by negative request.
 * 
 * @param {string} section 
 * @param {string} message 
 * @param {boolean} result 
 * @returns {Object}
 */
export function asyncErrorAction(section, message = 'Произошла ошибка', result = false) {
    return {
        type: ASYNC_ERROR,
        payload: {
            [section]: {
                isFetching: false,
                result,
                message
            }
        }
    }
}

/**
 * Clear async response.
 * 
 * @param {string} section 
 * @returns {Object}
 */
export function clearAsyncResponse(section) {
    return {
        type: CLEAR_ASYNC_RESPONSE,
        payload: {
            section
        }
    }
}