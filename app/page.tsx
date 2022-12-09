'use client';
import { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import BasicLayout from '../components/common/basicLayout'
import getDays from '../utils/getDays'
import {useMonth} from '../store/useMonth'
import {useDaysInfo} from '../store/useDaysInfo'

export default function Page(){
    const {month,addMonth,minusMonth}=useMonth(state=>state);
    const {days,setDays}=useDaysInfo(state=>state);
    
    const increase=()=>{      
      addMonth()
      setDays(month)
    }
    const decrease=()=>{      
      minusMonth()
      setDays(month)
    } 
    console.log(days)

    return(
        <BasicLayout>
            <div className=''>
              {month}
              <button className='border-2 border-indigo-400' onClick={increase}>++</button>
              <button className='border-2 border-indigo-400' onClick={decrease}>--</button>
            </div>            
            <div>
              {days[0][0].month}
            </div>
        </BasicLayout>
    )
}
  