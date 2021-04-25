import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { updateTokensAction } from './actions/userAction';
import initState from './initState';
import RootReducer from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer(), initState, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    const { exp, accessToken } = store.getState();
    const dateNow = Date.now();
    
    if(dateNow + 895000 >= exp && accessToken) store.dispatch(updateTokensAction());
});

window.addEventListener('beforeunload', () => window.localStorage.setItem('state', JSON.stringify(store.getState().user)));

export { store };