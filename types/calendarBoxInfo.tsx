interface calendarBoxInfo {        
    calendarBoxIndex: number;
    shareCalendarList: number[];
    setCalendarBoxIndex:(num:number)=>void;
    addShareCalendar:(calendarId:number)=>void;
    deleteShareCalendar:(calendarId:number)=>void;
}  

export default calendarBoxInfo;