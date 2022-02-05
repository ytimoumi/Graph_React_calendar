import React from 'react';

import {Badge, Button, Modal,Input,  DatePicker} from "antd";
import {useDispatch} from "react-redux";
import "../Calendar.scss"
import moment from 'moment';
import {setCalendarActions} from "../store/calendarAction";

function CalendarModal({modalInfo, visible, handleCancel,handleAddReservation}) {

    const dispatch = useDispatch()

    const handlechangeTitle = (e) => {
        dispatch(setCalendarActions({CalendarName:"title",CalendarValue:e.target.value}))
    }
    const handlechangeEmail = (e) =>{
        dispatch(setCalendarActions({CalendarName:"email",CalendarValue:e.target.value}))
    }
    const handlechangeStartDate = (moment,value) =>{
        dispatch(setCalendarActions({CalendarName:"start",CalendarValue:value}))
    }
    const handlechangeEndDate = (moment,value) =>{
        dispatch(setCalendarActions({CalendarName:"end",CalendarValue:value}))
        console.log('sldkfjsldkfjlsdkfjlsdkfjsldkfj',moment,value)
    }


    return (
        <Modal

            visible={visible}
            title={<Badge className={"Modal-header-title"}
                          color={modalInfo.type === "à venir" ? 'blue' : modalInfo.type === "en cours" ? 'green' : modalInfo.type === "archivé" && 'gray'}
                          text={modalInfo.content}
            />}
            onCancel={handleCancel}
            footer={[
                <div className={"modal-footer "+( modalInfo.status !== -1 ? ' modal-footer--end' : '')}>

                   <Button className={"button-ghost"} onClick={handleAddReservation}>
                       Add reservation
                   </Button>

                </div>
            ]}
        >
            <div className={"body_Modal"}>

                <label htmlFor={"id_title"}>Title</label>
                <Input onChange={handlechangeTitle} placeholder="Please enter your title !!! " id={"id_title"}/>
                <br/>
                <label htmlFor={"id_email"}>Email</label>
                <Input onChange={handlechangeEmail} placeholder="Please enter your email !!!" id={"id_email"}/>
                 <br/>
                <label htmlFor={"start_date"}>Start Date</label>
                <DatePicker
                    id={"start_date"}
                    format="YYYY-MM-DDTHH:mm:ssZ"
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    onChange={(moment,value)=>handlechangeStartDate(moment,value)}
                />
                 <br/>
                <label htmlFor={"end-date"}>End Date</label>
                <DatePicker
                    id={"end-date"}
                    format="YYYY-MM-DDTHH:mm:ssZ"
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    onChange={(moment,value)=>handlechangeEndDate(moment,value)}
                />


            </div>
        </Modal>
    )
}

export default CalendarModal;
