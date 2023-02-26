'use client';
import calendarInfo from "../../types/calendarInfo";
import {useDaysInfo} from '../../store/useDaysInfo';
import { useScheduleList } from '../../store/useScheduleList';
import {useDate} from '../../store/useDate'
import { useCalendarBox } from '../../store/useCalendarBox';
import {Fragment,useEffect} from 'react';
import { useModal } from "../../store/useModal";
import { useCalendarInfo } from "../../store/useCalendarInfo";

function shareCalendarBox({id,calendar}:{id:number,calendar:calendarInfo}){
    const {month,year}=useDate(state=>state);
    const {days,setDays}=useDaysInfo(state=>state)
    const {getScheduleList}=useScheduleList(state=>state) 
    const {shareCalendarList,addShareCalendar,deleteShareCalendar}=useCalendarBox(state=>state)    
    const {openUpdateCalendar}=useModal(state=>state);  
    const {setCalendar}=useCalendarInfo(state=>state);

    const deleteCal=()=>{  
        deleteShareCalendar(calendar.calendarId)                    
    }
    const addCal=()=>{  
        addShareCalendar(calendar.calendarId)                    
    }

    return (
        <Fragment>
            {
                shareCalendarList.includes(calendar.calendarId)?
                <div className="mb-1 mx-2" role="button" onClick={deleteCal}>                    
                    <div className={`flex items-center justify-center w-16 bg-${calendar.color}-500 rounded-sm h-16 opacity-100`}>
                        <div className="">
                        <p className="text-xs text-white">{calendar.title}</p>
                        </div>                
                    </div>                    
                </div>:
                <div className="mb-1 mx-2" role="button" onClick={addCal}>                    
                    <div className={`flex items-center justify-center w-16 bg-${calendar.color}-500 rounded-sm h-16 opacity-50`}>
                        <div className="">
                        <p className="text-xs text-white">{calendar.title}</p>
                        </div>                
                    </div>                    
                </div>
            }
        
        </Fragment>
    )
}

export default shareCalendarBox;