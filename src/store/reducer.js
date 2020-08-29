export const initialState = {
    // token: null,
    // token: 'BQAvpKSaFbROrxEmPa_oj0n_9RnO6kWBaWDKS9Z4M4ntlUO9LTlp7dMMHaru3xEl4uWtzOiCA8oMHW6_T0_r7QJPQCfIXxCDKHoDH2Jq3bcfjK3bFVnr1ER5apC6e_2onvwhfPS8rGLh_PR_loXI4EpNQTIGSA0kMKWqY_hcsAm-kBSA5ACF',
    user: null,
    playlists: [],
    playing: false,
    item: null
}

const actionTypes = {
    SET_USER: 'SET_USER',
    SET_TOKEN: 'SET_TOKEN',
    SET_PLAYLISTS: 'SET_PLAYLISTS',
    SET_DISCOVER_WEEKLY: 'SET_DISCOVER_WEEKLY'
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action._token
            }
        case actionTypes.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists
            }
        case actionTypes.SET_DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}


export default reducer