import create from 'zustand'
import calendarBoxInfo from '../types/calendarBoxInfo';

export const useCalendarBox = create<calendarBoxInfo>((set) => ({
    calendarBoxIndex: 0,
    setCalendarBoxIndex:(num:number)=>{
        set(()=>({calendarBoxIndex:num}))
    }
}));