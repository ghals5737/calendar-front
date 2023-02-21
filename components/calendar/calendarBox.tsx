'use client';
import calendarInfo from "../../types/calendarInfo";
import {useDaysInfo} from '../../store/useDaysInfo';
import { useScheduleList } from '../../store/useScheduleList';
import {useDate} from '../../store/useDate'
import { useCalendarBox } from '../../store/useCalendarBox';
import {Fragment,useEffect} from 'react';
import { useModal } from "../../store/useModal";
import { useCalendarInfo } from "../../store/useCalendarInfo";

function calendarBox({id,calendar}:{id:number,calendar:calendarInfo}){
    const {month,year}=useDate(state=>state);
    const {days,setDays}=useDaysInfo(state=>state)
    const {getScheduleList}=useScheduleList(state=>state) 
    const {calendarBoxIndex,setCalendarBoxIndex}=useCalendarBox(state=>state)    
    const {openUpdateCalendar}=useModal(state=>state);  
    const {setCalendar}=useCalendarInfo(state=>state);

    const changeCalendar=()=>{  
        if(id===calendarBoxIndex){
            setCalendar(calendar)            
            openUpdateCalendar()
        }else{
            setDays(year,month) 
            sessionStorage.setItem("calendarId",String(calendar.calendarId))        
            getScheduleList(Number(sessionStorage.getItem("calendarId")),days[0][0].ymd,days[4][6].ymd)
            setCalendarBoxIndex(id)      
        }          
    }

    return (
        <Fragment>
            {
                id===calendarBoxIndex?
                <div className="mb-1" role="button" onClick={changeCalendar}>
                    <li className="px-1">                
                        <div className={`flex items-center justify-center w-12 bg-${calendar.color}-500 rounded-sm h-11 opacity-100`}>
                            <div className="">
                            <p className="text-xs text-white">{calendar.title}</p>
                            </div>                
                        </div>
                    </li>
                </div>:
                <div className="mb-1" role="button" onClick={changeCalendar}>
                    <li className="px-1">                
                        <div className={`flex items-center justify-center w-12 bg-${calendar.color}-500 rounded-sm h-11 opacity-50`}>
                            <div className="">
                            <p className="text-xs text-white">{calendar.title}</p>
                            </div>                
                        </div>
                    </li>
                </div>
            }
        
        </Fragment>
    )
}

export default calendarBox;