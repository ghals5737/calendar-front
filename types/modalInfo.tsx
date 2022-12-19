interface modalInfo {    
    modalOpen: Boolean;
    modalIndex: number;
    setModalIndex:(num:number)=>void;
    openModal: () => void;
    closeModal: () => void;
}  

export default modalInfo