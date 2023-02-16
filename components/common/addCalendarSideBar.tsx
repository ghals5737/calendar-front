'use client';
import CalendarList from '../calendar/calendarList'
import Link from 'next/link'
import FriendList from '../friend/friendList';
function addCalendarSideBar(){
    return(
        <aside  className="border-r-2 border-gray-100">
            <div className='p-2 font-bold text-lg text-gray-700'>내 캘린더</div>
            <CalendarList></CalendarList>            
            <div className='flex items-center'>
                <Link href={'/calendar/create'}>
                    <div role="button" className="pl-1 pr-2">
                        <div className="flex items-center justify-center w-12 border-2 border-dotted border-zinc-500 h-11">
                            <span className='text-2xl font-bold text-zinc-500'>+</span>                                       
                        </div>
                    </div>
                    <div>
                        <span className='font-bold text-base text-gray-700'>새 캘린더</span>
                    </div>
                </Link>
            </div>
            <FriendList></FriendList>
            <div className='flex items-center mt-2'>
                <Link href={'/calendar/create'}>
                    <div role="button" className="pl-1 pr-2">
                        <div className="flex items-center justify-center w-12 border-2 border-dotted border-zinc-500 h-11">
                            <span className='text-2xl font-bold text-zinc-500'>+</span>                                       
                        </div>
                    </div>
                    <div>
                        <span className='font-bold text-base text-gray-700'>친구 추가</span>
                    </div>
                </Link>
            </div>
        </aside>
    )
}

export default addCalendarSideBar