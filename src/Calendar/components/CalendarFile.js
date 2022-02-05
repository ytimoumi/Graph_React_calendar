import React from 'react';
import "../Calendar.scss";

import {useSelector} from "react-redux";
import CalendarEvents from "./CalendarEvents";
import GetCalendar from "./GetCalendar";
import HooksCalendar from '../utils/hooks.js'
import useWindowDimensions from "../../utils/components/getWindowDimensions";

import CalendarModal from "./CalendarModal";
export function CalendarFile() {
    const {handleDelete, handleStatusEvents, handleCancel,handleAddReservation } = HooksCalendar();
    const calendarProps = useSelector((state) => state.CalendarReducer)
    let modalInfo=calendarProps.calendarInfo.info;
    var  x  = useWindowDimensions();
    return (
        <div className={"CalendarFile"}>
            {
                x.matches &&
                calendarProps.calendar.activeCalendar &&
                <CalendarEvents />
            }
            <div className={ "CalendarFile__list " + ( !x.matches || (x.matches && !calendarProps.calendar.activeCalendar ) ? '' : 'hidden-calendar')}>
                <GetCalendar  />
            </div>

            {
                  <CalendarModal handleCancel={handleCancel}
                               visible={calendarProps.calendarVisible.visible}
                               modalInfo={modalInfo}
                               handleDelete={()=>handleDelete(modalInfo.id)}
                               handleStatusEvents={()=>handleStatusEvents(modalInfo)}
                                 handleAddReservation={handleAddReservation}
                ></CalendarModal>
            }
        </div>
    );
}
