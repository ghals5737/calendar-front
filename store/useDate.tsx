import create from 'zustand'
import getDays from '../utils/getDays'
import moment from 'moment'
import dateDataInfo from '../types/dateDataInfo'

export const useDate = create<dateDataInfo>((set) => ({
  month:Number(moment().format('MM')),
  year:Number(moment().format('YYYY')),
  addMonth: () => {
    set((state) => ({ month: state.month===12? 1:state.month+1}));
  },
  minusMonth: () => {
    set((state) => ({ month: state.month===1? 12:state.month-1 }));
  },
  addYear: () => {
    set((state) => ({ year: state.year+1 }));
  },
  minusYear: () => {
    set((state) => ({ year: state.year-1 }));
  },
  resetToday: () => {
    set(() => ({ 
      year: Number(moment().format('YYYY')),
      month:Number(moment().format('MM'))
    }));
  }
}));