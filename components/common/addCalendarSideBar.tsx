'use client';
import CalendarList from '../calendar/calendarList'
import FriendList from '../friend/friendList';
import { useModal } from "../../store/useModal";


function addCalendarSideBar(){
    const {openCreateCalendar,opendAddFriendModal}=useModal(state=>state);    

    const openCreateCalendarModal=()=>{
        openCreateCalendar()
    }

    const openAddFriendModal=()=>{
        opendAddFriendModal()
    }

    return(
        <aside  className="border-r-2 border-gray-100">
            <div className='p-2 text-lg font-bold text-gray-700'>내 캘린더</div>
            <CalendarList></CalendarList>            
            <div className='flex items-center'>                
                    <div role="button" className="pl-1 pr-2" onClick={openCreateCalendarModal}>
                        <div className="flex items-center justify-center w-12 border-2 border-dotted border-zinc-500 h-11">
                            <span className='text-2xl font-bold text-zinc-500'>+</span>                                       
                        </div>
                    </div>
                    <div>
                        <span className='text-base font-bold text-gray-700'>새 캘린더</span>
                    </div>                
            </div>
            <FriendList></FriendList>
            <div className='flex items-center mt-2'>                
                    <div role="button" className="pl-1 pr-2" onClick={openAddFriendModal}>
                        <div className="flex items-center justify-center w-12 border-2 border-dotted border-zinc-500 h-11">
                            <span className='text-2xl font-bold text-zinc-500'>+</span>                                       
                        </div>
                    </div>
                    <div>
                        <span className='text-base font-bold text-gray-700'>친구 추가</span>
                    </div>                
            </div>
        </aside>
    )
}

export default addCalendarSideBar