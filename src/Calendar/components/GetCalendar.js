import React  from 'react'

import {Calendar,} from 'antd';


import HooksCalendar from "../utils/hooks";

const GetCalendar=()=>{
    const { DateCellRender, monthCellRender, OnPanelChange,mode} = HooksCalendar()

    return <Calendar dateCellRender={DateCellRender} monthCellRender={monthCellRender}
                  onPanelChange={OnPanelChange} mode={mode} />;
}

export default GetCalendar