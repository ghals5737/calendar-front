import daysInfo from '../../types/daysInfo'
import React, {useState,useEffect} from 'react';
import ScheduleSetModal from '../modal/scheduleSetModal';
import ScheduleGrid from '../schedule/scheduleGrid';
import {useModal} from '../../store/useModal'
function dayGrid({day}:{day:daysInfo}){    
    const {modalOpen,openModal,setModalIndex}=useModal(state=>state)           

    const open=()=>{
        if(modalOpen!==true){
            setModalIndex(day.id)
            openModal()
        }
    }

    return(
        <div onClick={open} className='grid-cols-1 grid-rows-1 border-b border-gray-100 hover:bg-gray-50' role="button">                
            <p className='pt-3 pl-3'>{day.day}</p>                                    
            <ScheduleSetModal day={day}>                
                {`${day.year}-${day.month}-${day.day}`}
            </ScheduleSetModal>         
            <ScheduleGrid>
            </ScheduleGrid>                                               
        </div>
    )
}

export default dayGrid