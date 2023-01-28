import scheduleInfo from './scheduleInfo'

interface scheduleListInfo{
    scheduleList:scheduleInfo[];
    addSchedule:(schedule:scheduleInfo)=>void
    getScheduleList:()=>void
}

export default scheduleListInfo;