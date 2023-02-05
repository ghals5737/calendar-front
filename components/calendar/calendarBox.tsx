'use client';
import calendarInfo from "../../types/calendarInfo";
import {useDaysInfo} from '../../store/useDaysInfo';
import { useScheduleList } from '../../store/useScheduleList';
import {useDate} from '../../store/useDate'
import { useCalendarBox } from '../../store/useCalendarBox';

function calendarBox({id,calendar}:{id:number,calendar:calendarInfo}){
    const {month,year}=useDate(state=>state);
    const {days,setDays}=useDaysInfo(state=>state)
    const {getScheduleList}=useScheduleList(state=>state) 
    const {calendarBoxIndex,setCalendarBoxIndex}=useCalendarBox(state=>state) 
    let isSelect=id===calendarBoxIndex?100:50    

    const changeCalendar=()=>{       
        setDays(year,month) 
        sessionStorage.setItem("calendarId",String(calendar.calendarId))        
        getScheduleList(Number(sessionStorage.getItem("calendarId")),days[0][0].ymd,days[4][6].ymd)
        setCalendarBoxIndex(id)
        isSelect=100
    }
    return (
        <div className="mb-1" role="button" onClick={changeCalendar}>
            <li className="px-1">
                <div className={`flex items-center justify-center w-12 bg-${calendar.color}-500 rounded-sm h-11 opacity-${isSelect}`}>
                    <div className="">
                    <p className="text-xs text-white">{calendar.title}</p>
                    </div>                
                </div>
            </li>
        </div>
    )
}

export default calendarBox;