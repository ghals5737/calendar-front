import create from 'zustand'
import calendarBoxInfo from '../types/calendarBoxInfo';

export const useCalendarBox = create<calendarBoxInfo>((set) => ({
    calendarBoxIndex: 0,
    shareCalendarList: [],
    setCalendarBoxIndex:(num:number)=>{
        set(()=>({calendarBoxIndex:num}))
    },
    addShareCalendar:(calendarId:number)=>{
        set((state)=>({
            shareCalendarList:[...state.shareCalendarList,calendarId]
        }))
    },
    deleteShareCalendar:(calendarId:number)=>{
        set((state)=>({
            shareCalendarList:state.shareCalendarList.filter(el=>el!=calendarId)
        }))
    }
}));