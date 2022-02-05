import React from 'react';
import moment from "moment";

import {useSelector} from "react-redux";

import HooksCalendar from "../utils/hooks";

function CalendarEvents() {
    const CalendarReducer = useSelector((state) => state.CalendarReducer);
    let calenderEventClick = CalendarReducer.calendar.activeCalendarEvents;
    const calendarValues = CalendarReducer.calendar.calendarValues;
    let calendarCompareMoment =  calendarValues.map(item => moment(item.date.date).isSame(calenderEventClick , 'day'))

    const { DateCellRender} = HooksCalendar()
    const getFormatCalendar = () =>{
        if(calenderEventClick) return calenderEventClick.format('DD / MM/ YYYY')
        else return ''
    }
    return(
        <div className={"div_global_calendar"}>
            <span className={"spn_Date_event"}>{getFormatCalendar()}</span>
            {
                DateCellRender(calenderEventClick, calendarCompareMoment)
            }

        </div>
    )
}

export default CalendarEvents;

