import {DataConstraints} from './dataConstraint'

const {UserCredentialStorageData,}= DataConstraints()

const INITIAL_STATE = {
    accountMenu : 0,
    directMenu : 0,
    DarkMode : JSON.parse(localStorage.getItem("darkMode"))|| false,
    iframeStyle:{height:"20%"},
    appState: { loggedIn: false },
    gqlError: { msg: '' },
    authToken : '',
    activeSideMenu:false,
    lang:localStorage.getItem("i18nextLng") ? localStorage.getItem("i18nextLng"):"fr",
    runDeleteOneRow:false,
    storageData : UserCredentialStorageData(),
    colorStickyBar: "RGBA(255, 255, 255, 0.04)"
}

export const  Reducer=(state=INITIAL_STATE , action)=>{

    switch (action.type){

        case "SET_StorageData":
            const {credentialsData}=action.payload
            return{
                ...state,
                storageData: credentialsData
            }

        case "SET_AccountMenu":
            return{
                ...state,
                accountMenu: action.payload
            }
        case "SET_DirectMenu":
            return{
                ...state,
                directMenu: action.payload
            }
        case "SET_DeleteOneRow":
            return{
                ...state,
                runDeleteOneRow: action.payload
            }
        case "SET_DarkMode":
            return {
                ...state,
                DarkMode: action.payload
            }
        case "SET_ColorStickyBar":
            return {
                ...state,
                colorStickyBar: action.payload
            }
        case "SET_AppSetLogin":
            return {
                ...state,
                appState: { loggedIn: true },
                authToken : action.payload
            }
        case "SET_AppSetLogout":
            return {
                ...state,
                appState: { loggedIn: false },
                authToken : ''
            }
        case "CHANGE_LANG":
            return {...state,lang:action.payload}

        default:{
            return state
        }
    }
}

