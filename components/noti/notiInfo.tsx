import notiInfo from "../../types/notiInfo"
import React, {useEffect,Fragment, useState} from 'react';
const notiInfo=({noti}:{noti:notiInfo})=>{
    const [msg, setMsg] = useState('');
    useEffect(()=>{
        switch(noti.notiType){
            case 'FRIEND_REQUEST':
                setMsg('친구 요청')
                break;
            case 'FRIEND_ACCEPT':
                setMsg('친구 수락')
                break;
            case 'FRIEND_DECLINE':
                setMsg('친구 거절')
                break;
        }
    },[])
    return(
        <div className="p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
        <div className="flex items-center">
            <span className="mr-2 text-sm text-blue-500 material-icons">{noti.email}</span>
            <div className="flex-grow text-sm font-medium text-gray-700 truncate">{msg}</div>
            <div className="py-2 px-2 ml-2 text-xs font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">수락</div>                  
        </div>
        </div>      
    )
}

export default notiInfo