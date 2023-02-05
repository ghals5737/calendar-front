import CalendarBox from "./calendarBox"
import { useCalendarInfo } from "../../store/useCalendarInfo";
import calendarInfo from "../../types/calendarInfo";

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
                calendars.map((calendar,index)=>{
                    return(
                        <CalendarBox id={index} calendar={calendar}></CalendarBox>                        
                    )
                })
            }
           
        </ul>

    )
}

export default calendarList