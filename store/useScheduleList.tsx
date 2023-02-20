import create from 'zustand'
import scheduleListInfo from '../types/scheduleListInfo'
import scheduleInfo from '../types/scheduleInfo'
import axios from '../api/axiosInstance';

export const useScheduleList = create<scheduleListInfo>((set) => ({
    scheduleList:[],    
    addSchedule:(schedule)=>{    
        axios.post('/schedule',{
            calendarId:schedule.calendarId,
            startYmd:schedule.startYmd,
            endYmd:schedule.endYmd,
            startDt:schedule.startDt,
            endDt:schedule.endDt,
            title:schedule.title,
            des:schedule.des,
            color:schedule.color            
        }).then((data)=>{
            console.log('data>',data)
            set((state)=>({
                scheduleList:[...state.scheduleList,schedule]            
            }))
        })                 
    },
    updateSchedule:(schedule)=>{    
        axios.put('/schedule',{
            scheduleId:schedule.scheduleId,
            startYmd:schedule.startYmd,
            endYmd:schedule.endYmd,
            startDt:schedule.startDt,
            endDt:schedule.endDt,
            title:schedule.title,
            des:schedule.des,
            color:schedule.color            
        }).then((data)=>{
            console.log('data>',data)
            set((state)=>({
                scheduleList:[...state.scheduleList,schedule]            
            }))
        })                 
    },
    getScheduleList:(calendarId,startYmd,endYmd)=>{
        axios.get(`/schedule/calendar/${calendarId}?startYmd=${startYmd}&endYmd=${endYmd}`)
        .then((result)=>{
            console.log('scheuduleList>',result.data.body.data)
            set(()=>({
                scheduleList:[...result.data.body.data]
            }))
        }) 
    }
}));