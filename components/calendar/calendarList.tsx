import CalendarBox from "./calendarBox"
import { useCalendarInfo } from "../../store/useCalendarInfo";

function calendarList(){
    const {calendars}=useCalendarInfo(state=>state);

    return (
        <ul className="">
            <div>
                <div className="">
                <span
                    className=""
                    role="button"
                    aria-label="전체 선택"
                ></span>
                </div>
            </div>
            {
                calendars.map(calendar=>{
                    return(
                        <CalendarBox calendar={calendar}></CalendarBox>
                    )
                })
            }
           
        </ul>

    )
}

export default calendarList