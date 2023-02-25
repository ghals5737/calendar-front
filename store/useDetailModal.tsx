import create from 'zustand'
import modalInfo from '../types/modalInfo';

export const useDetailModal = create<modalInfo>((set) => ({
  modalOpen:false,
  modalIndex:0,
  createCalOpen:false,
  updateCalOpen:false,
  addFriendOpen:false,
  shareCalOpen:false,
  setModalIndex:(num:number)=>{
    set(()=>({modalIndex:num}))
  },
  openModal: () => {
    set(() => ({ modalOpen: true }));
  },
  closeModal: () => {        
    set(() => ({ modalOpen: false }));
  },
  openCreateCalendar: () => {        
    set(() => ({ createCalOpen: true }));
  },
  closeCreateCalendarModal: () => {        
    set(() => ({ createCalOpen: false }));
  },
  openUpdateCalendar: () => {        
    set(() => ({ updateCalOpen: true }));
  },
  closeUpdateCalendarModal: () => {        
    set(() => ({ updateCalOpen: false }));
  },
  opendAddFriendModal: () => {        
    set(() => ({ addFriendOpen: true }));
  },
  closeAddFriendModal: () => {        
    set(() => ({ addFriendOpen: false }));
  },
  openShareCalModal: () => {        
    set(() => ({ shareCalOpen: true }));
  },
  closeShareCalModal: () => {        
    set(() => ({ shareCalOpen: false }));
  },
}));