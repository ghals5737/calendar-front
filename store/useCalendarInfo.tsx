import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import calendarInfo from '../types/calendarInfo';

interface CalendarDataInfo {    
    calendars: calendarInfo[]; 
    addCalendar:(calendar:calendarInfo) => void;  
}  

export const useCalendarInfo = create<CalendarDataInfo>((set) => ({
    calendars:[],
    addCalendar: (calendar) => {
      set((state) => ({
        calendars:[...state.calendars,calendar]
        }));
    },
}));