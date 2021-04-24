/**
 * Get the async request from the state.
 * 
 * @param {string} section part of the state
 * @returns {function}
 */
export function getAsyncRequest(section) {
    return function(state) {
        const defaultState = {
            isFetching: false,
            result: null,
            message: null
        }

        return {
            asyncRequest: state.asyncRequest[section] === undefined ? defaultState : state.asyncRequest[section]
        }
    }
}