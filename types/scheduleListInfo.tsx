import scheduleInfo from './scheduleInfo'

interface scheduleListInfo{
    scheduleList:scheduleInfo[];
    addSchedule:(schedule:scheduleInfo)=>void
<<<<<<< HEAD
    getScheduleList:(calendarId:number,startYmd:string,endYmd:string)=>void
=======
    getScheduleList:()=>void
>>>>>>> 1946f1b76bf30543945094e06315ae4383aaad94
}

export default scheduleListInfo;