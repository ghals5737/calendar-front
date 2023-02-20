'use client';
import {useState} from 'react';
import { useCalendarInfo } from "../../store/useCalendarInfo";
const COLORS = [
    { name: "빨강", value: "red" },
    { name: "주황", value: "orange" },
    { name: "초록", value: "green" },
    { name: "파랑", value: "blue" },
    { name: "보라", value: "purple" },
    { name: "분홍", value: "pink" },
  ];
  function ColorButton({ color, onClick}:{color:any,onClick:any}) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`rounded-full w-5 h-5 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          color === "white" ? "border-gray-300" : `bg-${color}-500`
        }`}
        style={color === "white" ? { border: "1px solid" } : {}}
      ></button>
    );
  }
function createCalendar(){
    const {addCalendar}=useCalendarInfo(state=>state);
    const [calendarTitle, setCalendarTitle] = useState('');
    const [calendarDes, setCalendarDes] = useState('');
    const [calendarCategory, setCalendarCategory] = useState('');
    const [color, setColor] = useState('red');    

    const addCal=()=>{
        addCalendar(sessionStorage.getItem("userId")!,{
            calendarId:0,
            title:calendarTitle,
            description:calendarDes,
            category:calendarCategory,
            color:color
        })        
    }

    return(
        <div className="bg-white p-6 w-96 rounded-md shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          새 캘린더 만들기
        </h3>       
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="theme"
            >
              테마
            </label>
            <select
              id="theme"
              name="theme"             
              onChange={(event) => setCalendarCategory(event.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-100"
            >
              <option value="">카테고리를 선택해주세요.</option>
              <option value={"PRSN"} className="dark:bg-gray-500">개인</option>
            <option value={"WORK"} className="dark:bg-gray-500">업무</option>
            <option value={"COUPLE"} className="dark:bg-gray-500">커플</option>
            <option value={"TRIP"} className="dark:bg-gray-500">여행</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="title"
            >
              제목
            </label><input
         type="text"
         id="title"
            name="title"
            value={calendarTitle}
            onChange={(event) => setCalendarTitle(event.target.value)}
         className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-100"
         placeholder="제목을 입력해주세요."
       />
</div>
<div className="mb-4">
<label
         className="block text-sm font-medium text-gray-700 mb-1"
         htmlFor="description"
       >
본문
</label>
<textarea
id="description"
name="description"
value={calendarDes}
onChange={(event) => setCalendarDes(event.target.value)}
className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-100"
placeholder="내용을 입력해주세요."
></textarea>
</div>
<div className="mb-4">
<label
         className="block text-sm font-medium text-gray-700 mb-1"
         htmlFor="color"
       >
색상
</label>
<div className="flex items-center">
{COLORS.map((color) => (
<ColorButton
key={color.value}
color={color.value}
onClick={() => setColor(color.value)}
/>
))}
</div>
</div>
<div className="flex justify-end">
<button
         type="button"
         className="px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-500 dark:border-gray-300 mr-2"
       >
취소
</button>
<button
type="submit"
className="px-4 py-2 border rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-500 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
disabled={!calendarCategory || !calendarTitle || !calendarDes || !color}
>
등록
</button>
</div>
</div>
    )
}

export default createCalendar