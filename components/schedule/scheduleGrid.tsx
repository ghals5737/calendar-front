'use client';
import { useDetailModal } from '../../store/useDetailModal'
import scheduleInfo from '../../types/scheduleInfo'
import scheduleLayoutInfo from '../../types/scheduleLayoutInfo'
import ScheduleDetailModal from '../modal/scheduleDetailModal'

function scheduleGrid({id,scheduleLayoutInfo}:{id:number,scheduleLayoutInfo:scheduleLayoutInfo}){
    const {modalOpen,openModal,setModalIndex}=useDetailModal(state=>state)           

    const open=()=>{
        if(modalOpen!==true){
            setModalIndex(id)
            openModal()
        }
    }
    
    return(        
        <div onClick={open} className={`hover:bg-opacity-90 mb-[2px] rounded-md mx-1 pl-2 bg-${scheduleLayoutInfo.color}-500 ${scheduleLayoutInfo.gridRange} z-99`} role={'button'}>            
            <span className='flex-initial'>
                {scheduleLayoutInfo.schedule.title}
            </span>
            <ScheduleDetailModal id={id} schedule={scheduleLayoutInfo.schedule}></ScheduleDetailModal>            
        </div>  
    )
}

export default scheduleGrid