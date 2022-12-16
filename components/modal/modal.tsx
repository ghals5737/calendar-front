import React, {useEffect} from 'react';
import {useModal} from '../../store/useModal'
const modal = ({ children,id }: { children: React.ReactNode,id:number }) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {modalOpen,modalIndex,closeModal}=useModal(state=>state)   
    
    const close=()=>{
        console.log(id)
        closeModal()
    }

    const isOpen=()=>{
        return modalOpen&&id===modalIndex
    }

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={isOpen() ?'flex z-99 fixed items-center':'fixed inset-0 hidden z-99'}>
        {isOpen() ? (
          <div >
            modal
            <button onClick={close}>close</button>
          </div>
        ) : null}
      </div>
    );
  };

  export default modal;