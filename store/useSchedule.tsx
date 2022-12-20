import create from 'zustand'
import scheduleInfo from '../types/scheduleInfo'

export const useSchedule = create<scheduleInfo>((set) => ({
    startDt:new Date(),
    endDt:new Date(),
    title:'',
    des:''
}));