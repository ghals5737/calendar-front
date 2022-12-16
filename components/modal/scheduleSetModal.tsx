import React, {useEffect} from 'react';
import daysInfo from '../../types/daysInfo'
import {useModal} from '../../store/useModal'
const scheduleSetModal = ({ children,day }: { children: React.ReactNode,day:daysInfo }) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {modalOpen,modalIndex,closeModal}=useModal(state=>state)   
    
    const close=()=>{        
        closeModal()
    }

    const isOpen=()=>{
        return modalOpen&&day.id===modalIndex
    }

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={isOpen() ?'z-10 relative':'fixed inset-0 hidden z-99'}>
        {isOpen() ? (
            <div className="relative z-10">         
                <div className="fixed inset-0 transition-opacity bg-gray-100 bg-opacity-40"></div>        
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">           
                        <div className='w-[448px] bg-slate-600 h-[515px]'>
                            <div className='h-[36px] bg-red-500'>
                                header
                            </div>
                            <div className='h-[69px] bg-orange-600'>
                                제목 입력
                            </div>          
                            <div className='h-[338px] bg-yellow-500'>
                                일정 입력
                            </div>       
                            <div className='h-[50px]'>
                                푸터
                            </div>                                                        
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
      </div>
    );
  };

  export default scheduleSetModal;