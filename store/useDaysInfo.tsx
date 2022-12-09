import create from 'zustand'
import daysInfo from '../types/daysInfo'
import getDays from '../utils/getDays'
import moment from 'moment'

interface daysDataInfo {    
    days: daysInfo[][];
    setDays: (month: number) => void;
}  

export const useDaysInfo = create<daysDataInfo>((set) => ({
    days:getDays(Number(moment().format('MM'))),  
    setDays:(month:number)=>{
        set(()=>({
            days:getDays(month)
        }));
    }
}));