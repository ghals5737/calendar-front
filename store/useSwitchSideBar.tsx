import create from 'zustand'
import moment from 'moment'
import switchSideBarInfo from '../types/switchSideBarInfo';



export const useSwitchSideBar = create<switchSideBarInfo>((set) => ({
  isAddCalendar:false,
  openAddCalendar: () => {
    set(() => ({ isAddCalendar: true }));
  },
  closeAddCalendar: () => {        
    set(() => ({ isAddCalendar: false }));
  }
}));