'use client';
import daysInfo from '../../types/daysInfo'
import React, {useState,useEffect} from 'react';
import ScheduleSetModal from '../modal/scheduleSetModal';
import {useModal} from '../../store/useModal'

function dayGrid({day}:{day:daysInfo}){    
    const {modalOpen,openModal,setModalIndex}=useModal(state=>state)               

    const open=()=>{        
        if (sessionStorage.getItem("userId") === null) { 
            alert("로그인이 필요합니다.")                                                      
            return
        } 
        if (sessionStorage.getItem("calendarId") === null) { 
            alert("달력을 만들어 주세요.")                                                      
            return
        } 
        if(modalOpen!==true){
            setModalIndex(day.id)
            openModal()
        }
    }

    return(
        <div onClick={open} className={modalOpen?`grid-cols-1 border-r border-gray-200`:`z-10 grid-cols-1 hover:bg-gray-50 border-r border-gray-200`} role="button">            
            <ScheduleSetModal day={day}>                
                {`${day.year}-${day.month}-${day.day}`}
            </ScheduleSetModal>              
        </div>
    )
}

export default dayGrid