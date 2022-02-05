import React from 'react';
import {CalendarFile} from "./components/CalendarFile";
import HeaderCalendar from "./components/HeaderCalendar";
import {PrincipalPage} from "../utils/components/principalPage"

function Calendar() {

    return(
       <PrincipalPage>
           <HeaderCalendar/>
           <CalendarFile/>
       </PrincipalPage>
    );
}
export default Calendar;