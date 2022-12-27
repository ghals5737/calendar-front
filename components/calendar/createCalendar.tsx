import {useState} from 'react';
import { useCalendarInfo } from "../../store/useCalendarInfo";

function createCalendar(){
    const {addCalendar}=useCalendarInfo(state=>state);
    const [calendarTitle, setCalendarTitle] = useState('');
    const [calendarDes, setCalendarDes] = useState('');
    const [calendarCategory, setCalendarCategory] = useState('');
    const [color, setColor] = useState('red');    

    const addCal=()=>{
        addCalendar({
            calendarId:0,
            calendarTitle:calendarTitle,
            calendarDes:calendarDes,
            calendarCategory:calendarCategory,
            color:color
        })        
    }

    return(
        <div
        className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
        >
        <div className="w-1/3 space-y-10 pt-11 pl-11 ">
            <div className="space-y-2">
            <h3 className="text-xl font-medium sm:text-3xl sm:leading-10">
                새 캘린더 만들기
            </h3>
            </div>            
            <div className="space-y-12 sm:space-y-14">
                <div className="grid grid-cols-1 gap-y-7">
                <div className="space-y-1">
                    <label                    
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >테마</label
                    ><select
                    id="categoryCode"                    
                    className="block w-full pl-3 pr-10 text-base rounded-md shadow-sm border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                    name="categoryCode"
                    onChange={(e)=>{setCalendarCategory(e.target.value)}}
                    >
                    <option value="" className="dark:bg-gray-500">
                        카테고리를 선택해주세요.
                    </option>
                    <option value={calendarCategory} className="dark:bg-gray-500">개인</option>
                    <option value={calendarCategory} className="dark:bg-gray-500">업무</option>
                    <option value={calendarCategory} className="dark:bg-gray-500">취미</option>
                    <option value={calendarCategory} className="dark:bg-gray-500">기타</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label                    
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >제목</label>
                    <input
                    type="text"
                    id="title"
                    placeholder="제목을 입력해주세요."
                    className="block w-full pl-3 pr-10 text-base border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20"
                    name="title"
                    value={calendarTitle}
                    onChange={(e)=>{setCalendarTitle(e.target.value)}}
                    />
                </div>                
                <div className="space-y-1">
                    <label                    
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >본문</label
                    >
                    <div
                    className="relative z-0 border rounded-md shadow-sm remirror-theme border-gray-500/30 dark:border-gray-500/70"
                    >                
                    <textarea 
                    className="block p-2.5 w-full h-48" 
                    value={calendarDes}
                    onChange={(e)=>{setCalendarDes(e.target.value)}}
                    placeholder="내용을 입력해주세요">                        
                    </textarea>
                    <div
                    ></div>
                    <div
                    ></div>
                    <div
                        className="remirror-floating-popover"                       
                    ></div>
                    </div>
                </div>
                <div className='space-y-1'>                
                    <div>                                            
                        <span className={`rounded-full w-5 h-5 bg-${color}-500 inline-block`}></span> 
                    </div> 
                    <div className='mt-2'>     
                        <span onClick={()=>setColor('red')} className='inline-block w-5 h-5 mx-2 bg-red-500 rounded-full'></span>
                        <span onClick={()=>setColor('orange')} className='inline-block w-5 h-5 mx-2 bg-orange-500 rounded-full'></span>
                        <span onClick={()=>setColor('green')} className='inline-block w-5 h-5 mx-2 bg-green-500 rounded-full'></span>
                        <span onClick={()=>setColor('blue')} className='inline-block w-5 h-5 mx-2 bg-blue-500 rounded-full'></span>
                        <span onClick={()=>setColor('purple')} className='inline-block w-5 h-5 mx-2 bg-purple-500 rounded-full'></span>
                        <span onClick={()=>setColor('pink')} className='inline-block w-5 h-5 mx-2 bg-pink-500 rounded-full'></span> 
                    </div> 
                </div>                
                </div>
                <div className="flex justify-center mt-5 gap-x-3 sm:justify-end">
                <button                    
                    className="w-20 px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-gray-500/30 hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                    취소</button
                ><button
                    onClick={addCal}
                    className="inline-flex items-center px-8 py-2 space-x-2 text-sm font-semibold leading-6 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 disabled:bg-blue-500 disabled:opacity-40"                    
                >
                    등록
                </button>
                </div>
            </div>            
        </div>       
        </div>
    )
}

export default createCalendar