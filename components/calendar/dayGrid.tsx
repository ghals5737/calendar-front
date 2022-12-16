import daysInfo from '../../types/daysInfo'
import React, {useState,useEffect} from 'react';
import ScheduleSetModal from '../modal/scheduleSetModal';
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
        <div onClick={open} className='grid-cols-1 grid-rows-1 pt-3 pl-3 border-b border-gray-100 hover:bg-gray-50' role="button">                
            <p>{day.day}</p>                        
            {/* header 부분에 텍스트를 입력한다. */}
            <ScheduleSetModal day={day}>
                {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
                {`${day.year}-${day.month}-${day.day}`}
            </ScheduleSetModal>                                                           
        </div>
    )
}

export default dayGrid