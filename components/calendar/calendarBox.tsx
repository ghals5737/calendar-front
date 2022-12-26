import calendarInfo from "../../types/calendarInfo";

function calendarBox({calendar}:{calendar:calendarInfo}){
    return (
        <div className="mb-1" role="button">
            <li className="px-1">
                <div className={`flex items-center justify-center w-12 bg-${calendar.color}-500 rounded-sm h-11`}>
                    <div className="">
                    <p className="text-xs text-white">{calendar.calendarTitle}</p>
                    </div>                
                </div>
            </li>
        </div>
    )
}

export default calendarBox;