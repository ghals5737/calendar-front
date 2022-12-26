import CalendarList from '../calendar/calendarList'

function addCalendarSideBar(){
    return(
        <aside  className="border-r-2 border-gray-100">
            <div className='text-2xl p-2'>내 캘린더</div>
            <CalendarList></CalendarList>
            <div className='flex items-center'>
                <div role="button" className="pr-2 pl-1">
                    <div className="border-dotted border-2 border-zinc-500 w-12 h-11 flex justify-center items-center">
                        <span className='font-bold text-2xl text-zinc-500'>+</span>                                       
                    </div>
                </div>
                <div>
                    <span>새 캘린더</span>
                </div>
            </div>
        </aside>
    )
}

export default addCalendarSideBar