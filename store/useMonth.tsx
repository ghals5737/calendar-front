import create from 'zustand'
import getDays from '../utils/getDays'
import moment from 'moment'

interface monthDataInfo {    
    month: number;
    addMonth: () => void;
    minusMonth: () => void;
}  

export const useMonth = create<monthDataInfo>((set) => ({
  month:Number(moment().format('MM')),
  addMonth: () => {
    set((state) => ({ month: state.month+1 }));
  },
  minusMonth: () => {
    set((state) => ({ month: state.month-1 }));
  }
}));