import scheduleInfo from './scheduleInfo'

interface scheduleListInfo{
    scheduleList:scheduleInfo[];
    addSchedule:(schedule:scheduleInfo)=>void
    updateSchedule:(schedule:scheduleInfo)=>void
    getScheduleList:(calendarId:number,startYmd:string,endYmd:string)=>void
}

export default scheduleListInfo;