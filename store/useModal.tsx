import create from 'zustand'

interface modalInfo {    
    modalOpen: Boolean;
    modalIndex: number;
    setModalIndex:(num:number)=>void;
    openModal: () => void;
    closeModal: () => void;
}  

export const useModal = create<modalInfo>((set) => ({
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