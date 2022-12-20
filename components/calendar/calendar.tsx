
import {useMonth} from '../../store/useMonth'
import {useDaysInfo} from '../../store/useDaysInfo'
import DayGrid from './dayGrid'
import React, {useEffect} from 'react';

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
            <div className="grid grid-cols-7 ">
                <div className='pl-3 border-b border-gray-100'>일</div>
                <div className='pl-3 border-b border-gray-100'>월</div>
                <div className='pl-3 border-b border-gray-100'>화</div>
                <div className='pl-3 border-b border-gray-100'>수</div>
                <div className='pl-3 border-b border-gray-100'>목</div>
                <div className='pl-3 border-b border-gray-100'>금</div>
                <div className='pl-3 border-b border-gray-100'>토</div>
            </div>
            <div className="grid grid-cols-7 grid-rows-5 ">
                {days.map(week=>{
                    return(                        
                        week.map((day)=>{
                            return(                                
                                <DayGrid key={day.id} day={day}/>                                
                            )                                            
                        })
                    )                    
                })}                
            </div>
        </div>
        // <ScheduleInput></ScheduleInput>
    )
}

export default calendar