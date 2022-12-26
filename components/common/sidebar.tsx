import CalendarList from '../calendar/calendarList'

function sidebar(){
    return(
        <aside  className="flex items-center justify-center border-r-2 border-gray-100">
            <CalendarList></CalendarList>
        </aside>
    )
}

export default sidebar