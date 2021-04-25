const initState = {
    user: {
        id: null,
        nickname: null,
        governorId: null,
        accessToken: null,
        alliance: null,
        ordersToAlliances: [],
    },
    userProfile: null,
    asyncRequest: { },
    alliances: {
        alliances: []
    },
    alliance: null
}

// const state = JSON.parse(window.localStorage.getItem('state'));
// if(state.accessToken) {
//     initState.user = state;
// }
// window.localStorage.removeItem('state');

export default initState;