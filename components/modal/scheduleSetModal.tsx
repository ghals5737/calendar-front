import React, {useEffect,useState} from 'react';
import daysInfo from '../../types/daysInfo'
import {useModal} from '../../store/useModal'
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";


const scheduleSetModal = ({ children,day }: { children: React.ReactNode,day:daysInfo }) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {modalOpen,modalIndex,closeModal}=useModal(state=>state)   
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    
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
                        <div className='bg-white border border-gray-400 rounded shadow-md  w-[448px] h-[515px]'>
                            <div className='h-[36px] '>
                                <button onClick={close} className="top-0 right-0 float-right mt-2 mr-2 text-gray-400 align-middle transition duration-150 ease-in-out rounded cursor-pointer hover:text-gray-600 focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>                                
                            </div>
                            <div className='h-[69px] '>                                
                                <div>
                                    <input className='w-3/4 h-[60px] font-bold text-black border-b outline-none placeholder:text-gray-400 focus:border-blue-500 focus:border-b-2' placeholder='제목을 입력해주세요'></input>                            
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
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>                                    
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date:Date) => setStartDate(date)}
                                        dateFormat="MM월 dd일 (eee)"
                                        selectsStart                                        
                                        locale={ko}
                                        startDate={startDate}
                                        endDate={endDate}    
                                        className="w-[150px] text-center outline-none"
                                        timeInputLabel="시간:"   
                                        showTimeInput                                 
                                    />
                                    <p className='font-semibold'>-</p>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date:Date) => setEndDate(date)}
                                        dateFormat="MM월 dd일 (eee)"
                                        selectsEnd
                                        locale={ko}
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
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
                                    placeholder="Write your thoughts here...">                                    
                                    </textarea>
                                </div>
                            </div>       
                            <div className='h-[50px]'>
                                <button type="button" className="
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