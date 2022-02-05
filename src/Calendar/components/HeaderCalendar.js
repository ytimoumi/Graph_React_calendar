import React from 'react';
import { useSelector} from "react-redux";
import "../Calendar.scss"

function HeaderCalendar() {

    const darkMode = useSelector((state) => state.Reducer.DarkMode)
    // use Selector redux

    return (
        <div>


            <div className={"MesDirects-sticky"}>
                <div className={`MesDirects ${!darkMode ? "light" : "dark"}`}>
                </div>
            </div>
        </div>
    );
}

export default HeaderCalendar;
