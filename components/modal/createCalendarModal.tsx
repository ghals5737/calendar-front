'use client';
import {useState} from 'react';
import { useCalendarInfo } from "../../store/useCalendarInfo";
import { useModal } from "../../store/useModal";

function createCalendarModal(){
    const {addCalendar}=useCalendarInfo(state=>state);
    const {createCalOpen,closeCreateCalendarModal}=useModal(state=>state);
    const [calendarTitle, setCalendarTitle] = useState('');
    const [calendarDes, setCalendarDes] = useState('');
    const [calendarCategory, setCalendarCategory] = useState('');
    const [color, setColor] = useState('red');    

    const addCal=()=>{
        addCalendar(sessionStorage.getItem("userId")!,{
            calendarId:0,
            title:calendarTitle,
            description:calendarDes,
            category:calendarCategory,
            color:color
        })        
        closeCreateCalendarModal()
    }

    const isOpen=()=>{
        return createCalOpen
    }

    const close=()=>{        
        closeCreateCalendarModal()
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
            <h3 className="mb-4 text-lg font-medium text-gray-900">새 달력 만들기</h3>            
            <div className="mb-4">
                <label
                className="block mb-1 text-sm font-medium text-gray-700"
                htmlFor="theme"
                >
                테마
                </label>
                <select
                id="theme"
                name="theme"             
                onChange={(event) => setCalendarCategory(event.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-100"
                >
                <option value="">카테고리를 선택해주세요.</option>
                <option value={"PRSN"} className="dark:bg-gray-500">개인</option>
                <option value={"WORK"} className="dark:bg-gray-500">업무</option>
                <option value={"COUPLE"} className="dark:bg-gray-500">커플</option>
                <option value={"TRIP"} className="dark:bg-gray-500">여행</option>
                </select>
            </div>
              <div className="mb-4">
                  <label className="block mb-2 font-bold text-gray-700">
                    제목
                  </label>
                  <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" 
                  id="title" 
                  type="text"
                  value={calendarTitle}
                  onChange={(e)=>{setCalendarTitle(e.target.value)}} 
                  placeholder="제목을 입력해주세요." />
                </div>                
              
              
              
              <div className="mb-4">
                  <label className="block mb-2 font-bold text-gray-700">
                    본문
                  </label>
                  <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" 
                  id="description" 
                  placeholder="내용을 입력해주세요"
                  value={calendarDes}
                  onChange={(e) => setCalendarDes(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold text-gray-700">
                    색상
                  </label>
                  
                  <div className="flex items-center"> 
                      <div className="flex items-center w-1/5">
                          <label className={`inline-block h-5 w-5 rounded-full bg-${color}-500 cursor-pointer mx-2`}></label>
                      </div>
                      <div className="flex items-center w-4/5">                            
                          <label className="inline-block w-5 h-5 mx-2 bg-red-500 rounded-full cursor-pointer" onClick={()=>setColor('red')} ></label>                           
                          <label className="inline-block w-5 h-5 mx-2 bg-orange-500 rounded-full cursor-pointer" onClick={()=>setColor('orange')} ></label>                            
                          <label className="inline-block w-5 h-5 mx-2 bg-green-500 rounded-full cursor-pointer" onClick={()=>setColor('green')} ></label>                            
                          <label className="inline-block w-5 h-5 mx-2 bg-blue-500 rounded-full cursor-pointer" onClick={()=>setColor('blue')} ></label>                            
                          <label className="inline-block w-5 h-5 mx-2 bg-purple-500 rounded-full cursor-pointer" onClick={()=>setColor('purple')} ></label>                            
                          <label className="inline-block w-5 h-5 mx-2 bg-pink-500 rounded-full cursor-pointer" onClick={()=>setColor('pink')} ></label>                        
                      </div>                          
                  </div>
                </div>              
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">              
                  <button 
                  type="submit"                     
                  onClick={addCal} 
                  className="px-4 py-2 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  disabled={calendarTitle=='' || calendarCategory=='' || calendarDes=='' || color==''}
                  >
                    등록
                  </button>
                  <button type="button" onClick={close} className="px-4 py-2 ml-4 font-bold text-white bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline">
                    취소
                  </button>                
            </div>
          </div>
        </div>
      </div>
       ) : null}
       </div>
    )
}

export default createCalendarModal