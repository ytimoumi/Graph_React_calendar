//******************** calendar actions***************//

export function setCalendarOnchange(e){

    return{
        type: "SET_CalendarOnchange",
        payload:e,
    };
}

//******************** calendar actions***************//

export function setCalendarVisibleOnchange(e){

    return{
        type: "SET_CalendarVisibleOnchange",
        payload:e,
    };
}
export function setCalendarInfoOnchange(e){

    return{
        type: "SET_CalendarInfoOnchange",
        payload:e,
    };
}
export function setLoadingDeleteCalendarVideo(e){
    return{
        type:"SET_LoadingDeleteCalendarVideo",
        payload:e
    }
}
export function setShowDivsConditions(e){
    return {
        type : "SET_showDivsConditions",
        payload:e
    }
}

export function setCalendarActions(e){

    return{
        type:"SET_CalendarActions",
        payload:e,
    }

}
