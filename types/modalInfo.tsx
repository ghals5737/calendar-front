interface modalInfo {    
    modalOpen: Boolean;
    modalIndex: number;
    createCalOpen: Boolean;
    updateCalOpen: Boolean;
    addFriendOpen: Boolean;
    setModalIndex:(num:number)=>void;
    openModal: () => void;
    closeModal: () => void;
    openCreateCalendar:()=>void;
    closeCreateCalendarModal: () => void;
    openUpdateCalendar: () => void;
    closeUpdateCalendarModal: () => void;
    opendAddFriendModal:()=>void;
    closeAddFriendModal:()=>void;
}  

export default modalInfo