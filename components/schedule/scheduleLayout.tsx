'use client';
import { useScheduleList } from "../../store/useScheduleList"
import scheduleLayoutInfo from '../../types/scheduleLayoutInfo'
import daysInfo from '../../types/daysInfo'
import ScheduleGrid from "./scheduleGrid"
import getGridRange from "../../utils/getGridRange"
import { Fragment } from "react";

function scheduleLayout({ week }: { week:daysInfo[]}){    
    let scheduleLayoutInfoList:scheduleLayoutInfo[]=[]

    const {scheduleList}=useScheduleList(state=>state)    
    const isInclude=(startYmd:string,endYmd:string,nowYmd:string)=>{            
        return startYmd<=nowYmd&&nowYmd<=endYmd        
    }
    const filterItems=():scheduleLayoutInfo[]=>{              
        scheduleList.forEach(schedule=>{            
            const result=week.filter((day)=>isInclude(schedule.startYmd,schedule.endYmd,day.ymd))             
            if(result.length>0){                
                const gridRange=getGridRange(result[0].id%7,result[result.length-1].id%7)
                scheduleLayoutInfoList.push({
                    gridRange:gridRange,                     
                    color:schedule.color,                 
                    schedule:schedule                    
                })
            }            
        })                
        return scheduleLayoutInfoList    
    }    

    return( 
        <Fragment>
            {
                scheduleList.length>0?(                
                    filterItems().map((scheduleLayoutInfo,index)=>{                    
                        return(
                            <ScheduleGrid key={index} id={index} scheduleLayoutInfo={scheduleLayoutInfo}></ScheduleGrid>
                        )
                    })  
                )
                :null
            }
        </Fragment>    
    )
}

export default scheduleLayout