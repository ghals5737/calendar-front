interface modalInfo {    
    modalOpen: Boolean;
    modalIndex: number;
    createCalOpen: Boolean;
    updateCalOpen: Boolean;
    setModalIndex:(num:number)=>void;
    openModal: () => void;
    closeModal: () => void;
    openCreateCalendar:()=>void;
    closeCreateCalendarModal: () => void;
    openUpdateCalendar: () => void;
    closeUpdateCalendarModal: () => void;
}  

export default modalInfo