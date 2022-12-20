import React, {useEffect,useState} from 'react';
import daysInfo from '../../types/daysInfo'
import {useModal} from '../../store/useModal'
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import { useScheduleList } from "../../store/useScheduleList"
import scheduleInfo from '../../types/scheduleInfo';

const scheduleSetModal = ({ children,day }: { children: React.ReactNode,day:daysInfo }) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {modalOpen,modalIndex,closeModal}=useModal(state=>state)   
    const {scheduleList,addSchedule}=useScheduleList(state=>state)
    const [startDt,setStartDt]=useState(day.date)    
    const [endDt,setEndDt]=useState(day.date) 
    const [title,setTitle]=useState('') 
    const [des,setDes]=useState('') 
    
    const close=()=>{        
        closeModal()
    }

    const isOpen=()=>{
        return modalOpen&&day.id===modalIndex
    }

    const submit=()=>{        
        addSchedule(
            {
            startDt:startDt,
            endDt:endDt,
            title:title,
            des:des
            } as scheduleInfo
        )        
        closeModal()     
    }
    

    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={isOpen() ?'z-10 relative':'fixed inset-0 hidden z-99'}>
        {isOpen() ? (
            <div className="relative z-10">                 
                <div className="fixed inset-0 transition-opacity bg-gray-100 bg-opacity-40"></div>        
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">           
                        <div className='bg-white border border-gray-400 rounded shadow-md  w-[448px] h-[515px]'>
                            <div className='h-[36px] '>
                                <button onClick={close} className="top-0 right-0 float-right mt-2 mr-2 text-gray-400 align-middle transition duration-150 ease-in-out rounded cursor-pointer hover:text-gray-600 focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="24" height="24"
                                viewBox="0 0 24 24">
                                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                                </svg>
                                </button>                                
                            </div>
                            <div className='h-[69px] '>                                
                                <div>
                                    <input className='w-3/4 h-[60px] font-bold text-black border-b outline-none placeholder:text-gray-400 focus:border-blue-500 focus:border-b-2' 
                                    placeholder='제목을 입력해주세요'
                                    value={title}
                                    onChange={(e)=>{setTitle(e.target.value)}}></input>                            
                                </div>
                            </div>          
                            <div className='h-[358px] flex flex-col items-center'>                                                                
                                <div className='flex w-3/4 my-3 text-center'>
                                    <div className="inset-y-0 left-0 flex items-center pl-3 outline-none pointer-events-none">
                                        <svg aria-hidden="true" 
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20" 
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                                        </svg>
                                    </div>                                    
                                    <DatePicker
                                        selected={startDt}
                                        onChange={(date:Date) => setStartDt(date)}
                                        dateFormat="MM월 dd일 (eee)"
                                        selectsStart                                        
                                        locale={ko}
                                        startDate={startDt}
                                        endDate={endDt}    
                                        className="w-[150px] text-center outline-none"
                                        timeInputLabel="시간:"   
                                        showTimeInput                                 
                                    />
                                    <p className='font-semibold'>-</p>
                                    <DatePicker
                                        selected={endDt}
                                        onChange={(date:Date) => setEndDt(date)}
                                        dateFormat="MM월 dd일 (eee)"
                                        selectsEnd
                                        locale={ko}
                                        startDate={startDt}
                                        endDate={endDt}
                                        minDate={startDt}
                                        className="w-[150px] text-center outline-none"
                                        timeInputLabel="시간:"
                                        showTimeInput
                                    />                                    
                                </div>                                
                                
                                <div className='w-3/4 my-3'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">설명 추가</label>
                                    <textarea id="message" rows={4} 
                                    className="block p-2.5 w-full text-sm 
                                    outline-none
                                    text-gray-900 
                                    rounded-lg border 
                                    border-gray-300 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                    placeholder="Write your thoughts here..."
                                    value={des}
                                    onChange={(e) => setDes(e.target.value)}
                                    >                                    
                                    </textarea>
                                </div>
                            </div>       
                            <div className='h-[50px]'>
                                <button onClick={submit} type="button" className="
                                text-white 
                                bg-blue-700 
                                hover:bg-blue-800 
                                focus:ring-4 
                                focus:ring-blue-300 
                                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                                dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    등록
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