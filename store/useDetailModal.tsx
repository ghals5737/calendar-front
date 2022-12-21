import create from 'zustand'
import modalInfo from '../types/modalInfo';

export const useDetailModal = create<modalInfo>((set) => ({
  modalOpen:false,
  modalIndex:0,
  setModalIndex:(num:number)=>{
    set(()=>({modalIndex:num}))
  },
  openModal: () => {
    set(() => ({ modalOpen: true }));
  },
  closeModal: () => {        
    set(() => ({ modalOpen: false }));
  }
}));