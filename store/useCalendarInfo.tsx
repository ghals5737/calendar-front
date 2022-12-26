import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import calendarInfo from '../types/calendarInfo';

interface CalendarDataInfo {    
    calendars: calendarInfo[];    
}  

export const useCalendarInfo = create<CalendarDataInfo>((set) => ({
    calendars:[
        {    
            calendarId: 1,
            calendarTitle: 'test1',
            color:'red'
        },
        {   
            calendarId: 2,
            calendarTitle: 'test2',
            color:'green'
        }
    ]      
}));