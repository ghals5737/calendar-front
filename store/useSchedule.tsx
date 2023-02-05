import create from 'zustand'
import scheduleInfo from '../types/scheduleInfo'

export const useSchedule = create<scheduleInfo>((set) => ({
    scheduleId:0,
    calendarId:0,
    startYmd:'',
    endYmd:'',
    startDt:new Date(),
    endDt:new Date(),
    title:'',
    des:'',
    color:'blue'
}));