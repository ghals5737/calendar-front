import { useScheduleList } from "../../store/useScheduleList"
import scheduleLayoutInfo from '../../types/scheduleLayoutInfo'
import daysInfo from '../../types/daysInfo'
import ScheduleGrid from "./scheduleGrid"
import getGridRange from "../../utils/getGridRange"
import { Fragment } from "react";

function scheduleLayout({ week }: { week:daysInfo[]}){    
    
    
    let scheduleLayoutInfoList:scheduleLayoutInfo[]=[]

    const {scheduleList}=useScheduleList(state=>state)    
    const isInclude=(start:Date,end:Date,now:Date)=>{        
        return start<=now&&now<=end        
    }
//(result[result.length-1].id%7+2).toString()
    const filterItems=():scheduleLayoutInfo[]=>{                   
        scheduleList.forEach(schedule=>{
            const result=week.filter((day)=>isInclude(schedule.startDt,schedule.endDt,day.date)) 
            console.log('result>',result)
            if(result.length>0){
                alert("??")
                const gridRange=getGridRange(result[0].id%7,result[result.length-1].id%7)
                scheduleLayoutInfoList.push({
                    gridRange:gridRange,                     
                    color:" bg-orange-500 ",                 
                    schedule:schedule                    
                })
            }            
        })
        console.log('layout',scheduleLayoutInfoList)    
        return scheduleLayoutInfoList    
    }    

    return( 
        <Fragment>
            {
                scheduleList.length>0?(                
                    filterItems().map((scheduleLayoutInfo,index)=>{                    
                        return(
                            <ScheduleGrid key={index} scheduleLayoutInfo={scheduleLayoutInfo}></ScheduleGrid>
                        )
                    })  
                )
                :null
            }
        </Fragment>    
    )
}

export default scheduleLayout