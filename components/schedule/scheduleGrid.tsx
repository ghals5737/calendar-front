import scheduleInfo from '../../types/scheduleInfo'
import scheduleLayoutInfo from '../../types/scheduleLayoutInfo'

function scheduleGrid({scheduleLayoutInfo}:{scheduleLayoutInfo:scheduleLayoutInfo}){
    console.log('schedule>',scheduleLayoutInfo)
    
    //col-start-${scheduleLayoutInfo.startCol} col-end-${scheduleLayoutInfo.endCol} bg-${scheduleLayoutInfo.schedule.color}-400
    return(        
        <div className={` ${scheduleLayoutInfo.color} ${scheduleLayoutInfo.gridRange} z-999`} role={'button'}>            
            <span className='flex-initial'>
                {scheduleLayoutInfo.schedule.des}
            </span>            
        </div>  
    )
}

export default scheduleGrid