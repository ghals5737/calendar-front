import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import calendarInfo from '../types/calendarInfo';
import axios from '../api/axiosInstance';

interface CalendarDataInfo {    
    calendars: calendarInfo[]; 
    addCalendar:(calendar:calendarInfo) => void;  
}  
//localhost:8080/api/calendar
export const useCalendarInfo = create<CalendarDataInfo>((set) => ({
    calendars:[],
     addCalendar: (calendar) => { 
        axios.post('/calendar/test',{
            calendarId:calendar.calendarId,
            title:calendar.calendarTitle,
            description:calendar.calendarDes,
            color:calendar.color,
            category:calendar.calendarCategory
        }).then((data)=>{
            console.log('data>',data)
            set((state) => ({
                calendars:[...state.calendars,calendar]
            }));
        })                     
    },
}));