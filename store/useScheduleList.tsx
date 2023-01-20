import create from 'zustand'
import scheduleListInfo from '../types/scheduleListInfo'
import scheduleInfo from '../types/scheduleInfo'
import axios from '../api/axiosInstance';

export const useScheduleList = create<scheduleListInfo>((set) => ({
    scheduleList:[],    
    addSchedule:(schedule:scheduleInfo)=>{    
        axios.post('/schedule',{
            calendarId:1,
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
                
    }
}));