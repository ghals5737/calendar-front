'use client';
import { Fragment } from "react"


const noti=()=>{
    const openNotiList=()=>{
        const notificationButton = document.querySelector('button');
        const notificationContainer = document.querySelector('.fixed');
        notificationContainer!.classList.toggle('hidden');        
    }
    return(        
        <div className="">
            <div className="fixed top-16 right-6 w-80 max-h-72 bg-white shadow-md rounded-sm overflow-y-auto hidden z-999">
                <div className="py-2 px-3 border-b border-gray-200 font-bold text-lg text-gray-700">알림</div>
                <div className="p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-200">
                <div className="flex items-center">
                    <span className="material-icons text-blue-500 text-2xl mr-2">email</span>
                    <div className="flex-grow text-sm font-medium text-gray-700 truncate">새 이메일이 도착했습니다.</div>
                    <div className="text-xs text-gray-500 ml-2">1분 전</div>
                </div>
                <div className="text-sm text-gray-500 mt-1 truncate">이메일을 확인해 보세요.</div>
                </div>
                <div className="p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-200">
                <div className="flex items-center">
                    <span className="material-icons text-blue-500 text-2xl mr-2">message</span>
                    <div className="flex-grow text-sm font-medium text-gray-700 truncate">새 메시지가 도착했습니다.</div>
                    <div className="text-xs text-gray-500 ml-2">10분 전</div>
                </div>
                <div className="text-sm text-gray-500 mt-1 truncate">메시지를 확인해 보세요.</div>
                </div>
                <div className="p-3 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center">
                    <span className="material-icons text-blue-500 text-2xl mr-2">notifications</span>
                    <div className="flex-grow text-sm font-medium text-gray-700 truncate">새 알림이 있습니다.</div>
                    <div className="text-xs text-gray-500 ml-2">1시간 전</div>
                </div>
                <div className="text-sm text-gray-500 mt-1 truncate">알림을 확인해 보세요.</div>
                </div>
            </div>
            <button className="w-8 h-8 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none" onClick={openNotiList}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </button>
        </div>
    )
}




export default noti;