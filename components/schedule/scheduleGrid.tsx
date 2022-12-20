import { useScheduleList } from "../../store/useScheduleList"
import scheduleInfo from '../../types/scheduleInfo'

function scheduleGrid({ children,now }: { children: React.ReactNode,now:Date}){
    const {scheduleList}=useScheduleList(state=>state)
    
    const isShow=(start:Date,end:Date,now:Date)=>{
        return start<=now&&now<=end        
    }

    const filterItems=():scheduleInfo[]=>{
        return scheduleList.filter(el=>{isShow(el.startDt,el.endDt,now)})
    }

    return(        
        filterItems().map(()=>{
            return(
                <div>
                </div>
            )
        })          
        // <div className="h-5 bg-blue-500" role={'button'}>
        //     shceduleGridz
        // </div>
    )
}

export default scheduleGrid