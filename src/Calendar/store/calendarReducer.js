import {CalendarConstraints} from "../utils/calendarConstraints";

const { calendar , calendarVisibleModal,showDivsConditions, calendarInfoModal , AddReservation} = CalendarConstraints()

const CalendarInitialState = {

    calendar: calendar(),
    calendarVisible : calendarVisibleModal(),
    calendarInfo : calendarInfoModal(),
    showdivscondition:showDivsConditions(),
    AddReservation:AddReservation()
}

export const  CalendarReducer=(state=CalendarInitialState , action)=>{

    switch (action.type){
        //******** calendar reducer case************//

        case "SET_CalendarActions":
            const {CalendarName,CalendarValue}=action.payload
            const CalendarOnchangeObj = {...state.AddReservation,[CalendarName]: CalendarValue}
            return{
                ...state,
                AddReservation:CalendarOnchangeObj
            }


        case "SET_CalendarOnchange":
            const {CalendarNameChange,CalendarValueChange}=action.payload
            const CalendarOnOnchangeObj = {...state.calendar,[CalendarNameChange]: CalendarValueChange}
            return{
                ...state,
                calendar:CalendarOnOnchangeObj
            }

        //******** calendar Visible Modal reducer case************//

        case "SET_CalendarVisibleOnchange":
            const {CalendarVisibleNameChange,CalendarVisibleValueChange}=action.payload
            const CalendarVisibleOnOnchangeObj = {...state.calendarVisible,[CalendarVisibleNameChange]: CalendarVisibleValueChange}
            return{
                ...state,
                calendarVisible:CalendarVisibleOnOnchangeObj
            }


        case "SET_CalendarInfoOnchange":
            const {CalendarInfoNameChange,CalendarInfoValueChange}=action.payload
            const CalendarInfoOnOnchangeObj = {...state.calendarVisible,[CalendarInfoNameChange]: CalendarInfoValueChange}
            return{
                ...state,
                calendarInfo:CalendarInfoOnOnchangeObj
            }



        case "SET_LoadingDeleteCalendarVideo":
            const {LoadingDeleteName,LoadingDeleteValue}=action.payload
            const LoadingDeleteObj = {...state.loadingDelete,[LoadingDeleteName]: LoadingDeleteValue}
            return{
                ...state,
                loadingDelete:LoadingDeleteObj
            }

        case "SET_showDivsConditions":
            const {showDivsConditionsName,showDivsConditionsValue}=action.payload
            const showDivsConditionsObj = {...state.showdivscondition,[showDivsConditionsName]: showDivsConditionsValue}
            return{
                ...state,showdivscondition:showDivsConditionsObj
            }
        default:{
            return state
        }
    }

}