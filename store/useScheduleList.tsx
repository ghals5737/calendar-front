import create from 'zustand'
import scheduleListInfo from '../types/scheduleListInfo'
import scheduleInfo from '../types/scheduleInfo'

export const useScheduleList = create<scheduleListInfo>((set) => ({
    scheduleList:[],
    addSchedule:(schedule:scheduleInfo)=>{
        set((state)=>({
            scheduleList:[schedule,...state.scheduleList]
        }))
    }
}));