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

export default initState;