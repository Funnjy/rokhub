import { combineReducers } from 'redux';
import allianceReducer from './allianceReducer';
import alliancesReducer from './alliancesReducer';
import asyncRequestReducer from './asyncRequestReducer';
import userProfileReducer from './userProfileReducer';
import userReducer from './userReducer';

export default function RootReducer() {
    return combineReducers({
        user: userReducer,
        asyncRequest: asyncRequestReducer,
        alliance: allianceReducer,
        alliances: alliancesReducer,
        userProfile: userProfileReducer
    });
}