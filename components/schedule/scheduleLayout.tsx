import { useScheduleList } from "../../store/useScheduleList"
import scheduleInfo from '../../types/scheduleInfo'
import ScheduleGrid from "./scheduleGrid"

function scheduleLayout({ children,now }: { children: React.ReactNode,now:Date}){
    const {scheduleList}=useScheduleList(state=>state)    

    const isShow=(start:Date,end:Date,now:Date)=>{        
        return start<=now&&now<=end        
    }

    const filterItems=():scheduleInfo[]=>{        
        return scheduleList.filter((el)=>isShow(el.startDt,el.endDt,now))
    }    

    return(        
        <div>            
            {scheduleList.length>0?(                
                filterItems().map((schedule,index)=>{                    
                    return(
                        <ScheduleGrid key={index} schedule={schedule}></ScheduleGrid>
                    )
                })  
            )
            :null}
        </div>        
    )
}

export default scheduleLayout