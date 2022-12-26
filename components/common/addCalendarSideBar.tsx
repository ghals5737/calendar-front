import CalendarList from '../calendar/calendarList'

function addCalendarSideBar(){
    return(
        <aside  className="flex items-center justify-center border-gray-100 border-r-5">
            <CalendarList></CalendarList>
        </aside>
    )
}

export default addCalendarSideBar