import daysInfo from '../../types/daysInfo'
import React, {useState,useEffect} from 'react';
import ScheduleSetModal from '../modal/scheduleSetModal';
import ScheduleLayout from '../schedule/scheduleLayout';
import {useModal} from '../../store/useModal'
function dayGrid({day}:{day:daysInfo}){    
    const {modalOpen,openModal,setModalIndex}=useModal(state=>state)           

    const open=()=>{        
        if (localStorage.getItem("loginToken") === null) {
            // 다크모드 -> 기본모드 
            alert("login 하세요")                                    
            return
          } 
        if(modalOpen!==true){
            setModalIndex(day.id)
            openModal()
        }
    }

    return(
        <div onClick={open} className={modalOpen?`grid-cols-1`:`z-10 grid-cols-1 hover:bg-gray-50`} role="button">            
            <ScheduleSetModal day={day}>                
                {`${day.year}-${day.month}-${day.day}`}
            </ScheduleSetModal>                     
        </div>
    )
}

export default dayGrid