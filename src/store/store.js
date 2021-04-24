import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { updateTokensAction } from './actions/userAction';
import initState from './initState';
import RootReducer from './reducers/RootReducer';

const store = createStore(RootReducer(), initState, applyMiddleware(thunk, updateTokens));

/**
 * Update access token.
 * 
 * @param {function} param0 
 * @returns 
 */
function updateTokens({ getState }) {
    return next => action => {
        const { exp, accessToken } = getState().user;
        const dateNow = Date.now();

        if(!exp || !accessToken) return next(action);
        if(dateNow + 895000 >= exp) store.dispatch(updateTokensAction());

        return next(action);
    }
}
export { store };