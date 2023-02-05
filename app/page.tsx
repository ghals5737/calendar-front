'use client';
import BasicLayout from '../components/common/basicLayout'
import Calendar from '../components/calendar/calendar'
import { useCalendarInfo } from '../store/useCalendarInfo';

export default function Page(){    
    return(       
        <BasicLayout>
            <Calendar></Calendar>
        </BasicLayout>        
    )
}
  