'use client';
import { Fragment,useState } from "react";
import { useModal } from "../../store/useModal";

const shareModal=()=>{
    const {shareCalOpen,closeShareCalModal}=useModal(state=>state);

    const isOpen=()=>{
        return shareCalOpen
    }

    const close=()=>{        
        closeShareCalModal()
    }

    return(        
        <div className={isOpen() ?'z-999 relative':'fixed inset-0 hidden z-99'}>
        {isOpen() ? (                
        <div className="fixed inset-0 z-50 overflow-y-auto">        
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">친구 검색</h2>
                </div>                        
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">이메일</label>
                    
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">             
                  
                  <button type="button" onClick={close} className="px-4 py-2 ml-4 font-bold text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline">
                    취소
                  </button>                
            </div>
              </div>
            </div>
          </div>
        </div>
       ) : null}
       </div>
    )
}

export default shareModal;