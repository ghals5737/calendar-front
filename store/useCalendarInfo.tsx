import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import calendarInfo from '../types/calendarInfo';
import axios from '../api/axiosInstance';

interface CalendarDataInfo {    
    calendars: calendarInfo[]; 
    nowCalendar: calendarInfo|null;
    addCalendar:(userId:string,calendar:calendarInfo) => void;  
    initCalendars:(userId:string) => void;
    getCalendars:(userId:string) => void;  
}  
//localhost:8080/api/calendar
export const useCalendarInfo = create<CalendarDataInfo>((set) => ({
    calendars:[],
    nowCalendar:null,
    initCalendars: (userId)=>{
        axios.get(`/calendar/users/${userId}`)
        .then((result)=>{
            console.log(result.data.body.data)
            sessionStorage.setItem("calendarId",result.data.body.data[0].calendarId)            
            set(() => ({
                calendars:[...result.data.body.data]
            }))            
        })
    },
    getCalendars: (userId)=>{
        axios.get(`/calendar/users/${userId}`)
        .then((result)=>{
            console.log(result.data.body.data)            
            set(() => ({
                calendars:[...result.data.body.data]
            }))            
        })
    },
    addCalendar: (userId,calendar) => { 
        axios.post('/calendar',{
            userId:Number(userId),
            title:calendar.title,
            description:calendar.description,
            color:calendar.color,
            category:calendar.category
        }).then((result)=>{
            console.log('data>',result.data.body.data)
            sessionStorage.setItem("calendarId",result.data.body.data.calendarId)
            set((state) => ({
            calendars:[...state.calendars,result.data.body.data],                        
        }));
    })                     
    },
}));