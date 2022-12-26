interface dateDataInfo {    
    month: number;
    year:number;
    addMonth: () => void;
    minusMonth: () => void;
    addYear: () => void;
    minusYear: () => void;
    resetToday: ()=>void;
}  

export default dateDataInfo;