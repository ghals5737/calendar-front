'use client';
//import Image from "next/image";
import Gravatar from 'react-gravatar';

const friendList=()=>{    
    let email="ghals5737@gmail.com"
    return (
        // <div className="fixed top-16 left-4 w-80 max-h-96 bg-white shadow-md rounded-sm overflow-y-auto">
            <div className='mt-8'>
            <div className="py-2 px-3 border-b border-gray-200 font-bold text-lg text-gray-700">친구 목록</div>
            <div className="py-2 px-1 cursor-pointer hover:bg-gray-100 border-b border-gray-200">
                <div className="flex items-center">
                    <Gravatar email={email} size={45} />
                    <div className="flex-grow text-sm font-medium text-gray-700 truncate ml-2">박준영</div>                    
                </div>
            </div>
            <div className="py-2 px-1 cursor-pointer hover:bg-gray-100 border-b border-gray-200">
                <div className="flex items-center">
                    <Gravatar email={email} size={45} />
                    <div className="flex-grow text-sm font-medium text-gray-700 truncate ml-2">김민아</div>                    
                </div>
            </div>
            <div className="py-2 px-1 cursor-pointer hover:bg-gray-100 border-b border-gray-200">
                <div className="flex items-center">
                    <Gravatar email={email} size={45} />
                    <div className="flex-grow text-sm font-medium text-gray-700 truncate ml-2">이재민</div>                    
                </div>
            </div>
         </div>
    )
}

export default friendList