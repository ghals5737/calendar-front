'use client';
import { Fragment,useState } from "react";
import { useDetailModal } from "../../store/useDetailModal";
import scheduleInfo from "../../types/scheduleInfo";
import { useScheduleList } from "../../store/useScheduleList"
import moment from 'moment'
import 'moment/locale/ko';

const scheduleDetailModal=({id,schedule}:{id:number,schedule:scheduleInfo})=>{
    const {modalOpen,modalIndex,closeModal}=useDetailModal(state=>state)
    const [startDt,setStartDt]=useState(moment(schedule.startDt).format('YYYY-MM-DD'))    
    const [endDt,setEndDt]=useState(moment(schedule.endDt).format('YYYY-MM-DD')) 
    const [title,setTitle]=useState(schedule.title) 
    const [des,setDes]=useState(schedule.des) 
    const [color,setColor]=useState(schedule.color)    
    const {updateSchedule,deleteSchedule}=useScheduleList(state=>state)

    const close=()=>{        
        closeModal()
    }

    const isOpen=()=>{
        return modalOpen&&id===modalIndex
    }

    const update=()=>{        
        console.log(moment(startDt).format('YYYYMMDD'))
        console.log(moment(endDt).format('YYYYMMDD'))
        updateSchedule(
            {
            scheduleId:schedule.scheduleId,
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

    const deleteS=()=>{        
      console.log(moment(startDt).format('YYYYMMDD'))
      console.log(moment(endDt).format('YYYYMMDD'))
      deleteSchedule(schedule.scheduleId)        
      closeModal()     
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
                        <h3 className="mb-4 text-lg font-medium text-gray-900">일정 수정 하기</h3>
                        <form>
                          <div className="mb-4">
                              <label className="block mb-2 font-bold text-gray-700">
                                제목
                              </label>
                              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" 
                              id="title" 
                              type="text"
                              value={title}
                              onChange={(e)=>{setTitle(e.target.value)}} 
                              placeholder="제목을 입력해주세요." />
                            </div>                
                          <div className="mb-4">
                              <label className="block mb-2 font-bold text-gray-700">
                                시작일
                              </label>                    
                              <input 
                              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" 
                              id="startDate" 
                              type="date"
                              value={startDt} 
                              onChange={(e)=>{setStartDt(e.target.value)}} 
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block mb-2 font-bold text-gray-700">
                                종료일
                              </label>
                              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" 
                              id="endDate" 
                              type="date"
                              value={endDt} 
                              onChange={(e)=>{setEndDt(e.target.value)}} 
                               />
                            </div>
                          
                          <div className="mb-4">
                              <label className="block mb-2 font-bold text-gray-700">
                                본문
                              </label>
                              <textarea className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" 
                              id="description" 
                              placeholder="내용을 입력해주세요"
                              value={des}
                              onChange={(e) => setDes(e.target.value)}
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
                          </form>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">                          
                              <button type="button" onClick={update} className="px-4 py-2 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                수정
                              </button>
                              <button type="button" onClick={deleteS} className="px-4 py-2 ml-4 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                삭제
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

export default scheduleDetailModal;