import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwt_decode from 'jwt-decode';
import { updateTokensAction } from './actions/userAction';
import initState from './initState';
import RootReducer from './reducers/RootReducer';

const accessToken = window.localStorage.getItem('state');
if(accessToken !== 'null') {
    const userData = jwt_decode(accessToken);
    initState.user = { ...userData, accessToken };
}
const store = createStore(RootReducer(), initState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    const { exp, accessToken } = store.getState().user;
    const dateNow = Date.now();

    if(dateNow + 895000 >= exp && accessToken) store.dispatch(updateTokensAction());
    // if(dateNow >= exp && accessToken) store.dispatch(updateTokensAction());
});

window.addEventListener('beforeunload',
    () => window.localStorage.setItem('state', store.getState().user.accessToken));
window.localStorage.removeItem('state');

export { store };