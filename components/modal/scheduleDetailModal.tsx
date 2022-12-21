import { Fragment } from "react";
import { useDetailModal } from "../../store/useDetailModal";
import scheduleInfo from "../../types/scheduleInfo";
import moment from 'moment'
import 'moment/locale/ko';

const scheduleDetailModal=({id,schedule}:{id:number,schedule:scheduleInfo})=>{
    const {modalOpen,modalIndex,closeModal}=useDetailModal(state=>state)

    const close=()=>{        
        closeModal()
    }

    const isOpen=()=>{
        return modalOpen&&id===modalIndex
    }

    return(        
        <div className={isOpen() ?'z-999 relative':'fixed inset-0 hidden z-99'}>
            {isOpen() ? (
                <div className="relative z-20">                 
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
                                
                                </div>          
                                <div className='h-[358px] flex flex-col items-center'>
                                    <div className='w-3/4 my-3'>
                                        <div className="mb-2">
                                            <p>제목</p>
                                            {schedule.title}
                                        </div>
                                        <div className="mb-2">
                                            <p>시작일</p>
                                            {moment(schedule.startDt).format('YYYY년 MMMM Do dddd HH시 mm분')}
                                        </div>
                                        <div className="mb-2">
                                            <p>종료일</p>
                                            {moment(schedule.endDt).format('YYYY년 MMMM Do dddd HH시 mm분')}
                                        </div>
                                        <div className="mb-2">
                                            <p>내용</p>
                                            {schedule.des}
                                        </div>
                                        <div className="mb-2">
                                            <p>색</p>
                                            {schedule.color}
                                        </div>                                                                              
                                    </div>                                    
                                </div>       
                                <div className='h-[50px]'>
                                    
                                </div>                                                        
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}  
        </div>             
    )
}

export default scheduleDetailModal;