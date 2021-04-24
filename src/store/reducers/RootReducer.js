import { combineReducers } from 'redux';
import { allianceReducer } from './allianceReducer';
import { alliancesReducer } from './alliancesReducer';
import { asyncRequestReducer } from './asyncRequestReducer';
import { userProfileReducer } from './userProfileReducer';
import { userReducer } from './userReducer';

function RootReducer() {
    return combineReducers({
        user: userReducer,
        asyncRequest: asyncRequestReducer,
        alliances: alliancesReducer,
        alliance: allianceReducer,
        userProfile: userProfileReducer
    });
}

export default RootReducer;