import scheduleInfo from './scheduleInfo'

interface scheduleListInfo{
    scheduleList:scheduleInfo[];
    addSchedule:(schedule:scheduleInfo)=>void
}

export default scheduleListInfo;