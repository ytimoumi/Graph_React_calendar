

export const CalendarConstraints = ()=>{

    const calendar = () => {
        return (
            {
                activeCalendar:false,
                activeCalendarEvents:{},
                calendarValues:[]
            }
        )
    }
    const calendarVisibleModal = () => {
        return (
            {
                visible:false,
            }
        )
    }
    const calendarInfoModal = () => {
        return (
            {
                info:{},
            }
        )
    }
    const showDivsConditions = () =>{
        return({
            elementSelected: 0,
            clickDeleteIcon:true,
            showElementSelected:false,
            rubDeleteItems:false
        })
    }
    const loadingDeleteShowVideo =()=>{
        return({
            loadingDelete:false
        })
    }
    const AddReservation = () => {
        return (
            {
                title:"",
                email:"",
                start:"",
                end:"",
                id:""
            }
        )
    }
    return({
        calendar,
        calendarVisibleModal,
        showDivsConditions,
        loadingDeleteShowVideo,
        calendarInfoModal,
        AddReservation
    })

}