'use client';
import React, {useEffect,useState} from 'react';
import daysInfo from '../../types/daysInfo'
import {useModal} from '../../store/useModal'
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import { useScheduleList } from "../../store/useScheduleList"
import scheduleInfo from '../../types/scheduleInfo';
import moment from 'moment'

const scheduleSetModal = ({ children,day }: { children: React.ReactNode,day:daysInfo }) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {modalOpen,modalIndex,closeModal}=useModal(state=>state)   
    const {addSchedule}=useScheduleList(state=>state)
    const [startDt,setStartDt]=useState("")    
    const [endDt,setEndDt]=useState("") 
    const [title,setTitle]=useState('') 
    const [des,setDes]=useState('') 
    const [color,setColor]=useState('red')    
    
    
    const close=()=>{        
        closeModal()
    }

    const isOpen=()=>{
        return modalOpen&&day.id===modalIndex
    }

    const submit=()=>{        
        console.log(moment(startDt).format('YYYYMMDD'))
        console.log(moment(endDt).format('YYYYMMDD'))
        addSchedule(
            {
            calendarId:Number(sessionStorage.getItem("calendarId")),
            startYmd:moment(startDt).format('YYYYMMDD'),
            endYmd:moment(endDt).format('YYYYMMDD'),    
            startDt:new Date(startDt),
            endDt:new Date(endDt),
            title:title,
            color:color,
            des:des
            } as scheduleInfo
        )        
        closeModal()     
    }

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={isOpen() ?'z-999 relative':'fixed inset-0 hidden z-99'}>
        {isOpen() ? (           
            <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">새 일정 만들기</h3>
              <form>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      제목
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="title" 
                    type="text"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}} 
                    placeholder="제목을 입력해주세요." />
                  </div>                
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      시작일
                    </label>                    
                    <input 
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="startDate" 
                    type="date"
                    value={startDt} 
                    onChange={(e)=>{setStartDt(e.target.value)}} 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      종료일
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="endDate" 
                    type="date"
                    value={endDt} 
                    onChange={(e)=>{setEndDt(e.target.value)}} 
                     />
                  </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      본문
                    </label>
                    <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="description" 
                    placeholder="내용을 입력해주세요"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      색상
                    </label>
                    
                    <div className="flex items-center"> 
                        <div className="flex items-center w-1/5">
                            <label className={`inline-block h-5 w-5 rounded-full bg-${color}-500 cursor-pointer mx-2`}></label>
                        </div>
                        <div className="flex items-center w-4/5">                            
                            <label className="inline-block h-5 w-5 rounded-full bg-red-500 cursor-pointer mx-2" onClick={()=>setColor('red')} ></label>                           
                            <label className="inline-block h-5 w-5 rounded-full bg-orange-500 cursor-pointer mx-2" onClick={()=>setColor('orange')} ></label>                            
                            <label className="inline-block h-5 w-5 rounded-full bg-green-500 cursor-pointer mx-2" onClick={()=>setColor('green')} ></label>                            
                            <label className="inline-block h-5 w-5 rounded-full bg-blue-500 cursor-pointer mx-2" onClick={()=>setColor('blue')} ></label>                            
                            <label className="inline-block h-5 w-5 rounded-full bg-purple-500 cursor-pointer mx-2" onClick={()=>setColor('purple')} ></label>                            
                            <label className="inline-block h-5 w-5 rounded-full bg-pink-500 cursor-pointer mx-2" onClick={()=>setColor('pink')} ></label>                        
                        </div>                          
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" onClick={submit} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                      등록
                    </button>
                    <button type="button" onClick={close} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                      취소
                    </button>
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