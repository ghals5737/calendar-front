
import {useMonth} from '../../store/useMonth'
import {useDaysInfo} from '../../store/useDaysInfo'
import DayGrid from './dayGrid'
import React, {useEffect} from 'react';
import ScheduleLayout from '../schedule/scheduleLayout';

function calendar(){
    const {month,addMonth,minusMonth}=useMonth(state=>state);
    const {days,setDays}=useDaysInfo(state=>state);    

    useEffect(() => {
        setDays(month)
    },[month])
    
    return(
        <div className="calendarMain">
            <div className="">
            <time dateTime="2019-02"> {`2022-${month}`} </time>
            <button onClick={minusMonth}>{`<`}</button>
            <button onClick={addMonth}>{`>`}</button>
            </div>
            <div className="grid grid-cols-7">
                <div className='pl-3 '><p className='relative bottom-3'>일</p></div>
                <div className='pl-3 '><p className='relative bottom-3'>월</p></div>
                <div className='pl-3 '><p className='relative bottom-3'>화</p></div>
                <div className='pl-3 '><p className='relative bottom-3'>수</p></div>
                <div className='pl-3 '><p className='relative bottom-3'>목</p></div>
                <div className='pl-3 '><p className='relative bottom-3'>금</p></div>
                <div className='pl-3 '><p className='relative bottom-3'>토</p></div>
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
                                                <p key={day.id} className='pt-3 pl-3 z-99'>{day.day}</p>                                
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
    )
}

export default calendar