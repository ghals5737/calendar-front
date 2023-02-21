'use client';
import {useDate} from '../../store/useDate'
import {useDaysInfo} from '../../store/useDaysInfo'
import DayGrid from './dayGrid'
import React, {useEffect,Fragment} from 'react';
import ScheduleLayout from '../schedule/scheduleLayout';
import { useScheduleList } from '../../store/useScheduleList';
import { useCalendarInfo } from '../../store/useCalendarInfo';
import CreateCalendarModal from '../modal/createCalendarModal';
import UpdateCalendarModal from '../modal/updateCalendarModal';
function calendar(){
    const {month,year,addMonth,minusMonth,addYear,minusYear,resetToday}=useDate(state=>state);
    const {days,setDays}=useDaysInfo(state=>state);
    const {getScheduleList}=useScheduleList(state=>state)    
    const {getCalendars}=useCalendarInfo(state=>state)

    const increaseMonth=()=>{
        if(month===12){            
            addYear()            
        }
        addMonth()        
    }

    const decreaseMonth=()=>{
        if(month===1){            
            minusYear()            
        }
        minusMonth() 
    }

    useEffect(() => {
        setDays(year,month)
        console.log("start days:",days[0][0].ymd)
        console.log("end days:",days[4][6].ymd)
        if(sessionStorage.getItem("calendarId")!==null){   
            getCalendars(sessionStorage.getItem("userId")!)         
            getScheduleList(Number(sessionStorage.getItem("calendarId")),days[0][0].ymd,days[4][6].ymd)
        }
    },[month])
    
    return(  
        <Fragment>
        <div className="calendarMain">
            <div className="mt-1">
                <button onClick={resetToday} className="items-center justify-center mr-2 text-lg font-bold text-gray-700 border border-gray-300 rounded-md ml-11 h-9 w-14 hover:bg-gray-50">
                오늘
                </button>
                <button onClick={decreaseMonth} className='mx-3 text-2xl font-bold text-zinc-500'>{`<`}</button>
                <button onClick={increaseMonth} className='mr-5 text-2xl font-bold text-zinc-500'>{`>`}</button>
                <time className='text-lg font-bold text-gray-700' dateTime="2019-02"> {`${year}년 ${month}월`} </time>
            </div>
            <div className="grid grid-cols-7">
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>일</p></div>
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>월</p></div>
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>화</p></div>
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>수</p></div>
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>목</p></div>
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>금</p></div>
                <div className='pl-3 text-lg font-bold text-gray-700'><p className='relative bottom-3'>토</p></div>
            </div>
            <div className="grid grid-rows-5 ">                   
                {days.map((week,index)=>{   
                    return (
                        <div key={index} className='relative flex-auto'> 
                            <div className='absolute grid w-full h-full grid-cols-7 border-t border-gray-200'>
                                {
                                    week.map((day)=>{
                                        return(                                
                                            <DayGrid key={day.id} day={day}/>                                
                                        )                                            
                                    })
                                } 
                            </div>  
                            <div className='relative flex flex-col w-full h-full flex-nowrap' >
                                <div className='grid grid-cols-7 grid-rows-1'>
                                    {
                                        week.map((day)=>{
                                            return(                                
                                                <p key={day.id} className='pt-3 pl-3 text-base font-bold text-gray-700 z-99'>{day.day}</p>                                
                                            )                                            
                                        })
                                    }                                    
                                </div>
                                <div className='grid grid-cols-7'>
                                    <ScheduleLayout week={week}></ScheduleLayout>                                    
                                </div>
                            </div>                            
                        </div>
                    )                                
                })}                                 
            </div>                      
        </div>       
         <CreateCalendarModal></CreateCalendarModal> 
         <UpdateCalendarModal></UpdateCalendarModal>
         </Fragment>            
    )
}

export default calendar