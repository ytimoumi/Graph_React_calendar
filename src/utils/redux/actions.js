

export function setStorageData(e){

    return{
        type: "SET_StorageData",
        payload:e,
    }

}

export function setAccountSetting(e){

    return{
        type: "SET_AccountMenu",
        payload:e,
    }

}

export function setDirectSetting(e){

    return{
        type: "SET_DirectMenu",
        payload:e,
    }

}

export function setDarkMode(e){
    return{
        type:"SET_DarkMode",
        payload:e
    }
}


export function setAppSetLogin(e){
    return{
        type:"SET_AppSetLogin",
        payload:e
    }
}

export function setAppSetLogout(){
    return{
        type:"SET_AppSetLogout",
    }
}

export const changeLang=(lang)=>({
    type:"CHANGE_LANG",
    payload:lang
})

export function setRunDeleteOneRow(e){
    return{
        type:"SET_DeleteOneRow",
        payload:e
    }
}
export function setColorStickyBar(){
    return{
        type:"SET_ColorStickyBar",
    }
}



