'use client';
import { useFriendInfo } from "../../store/useFriendInfo";
import FriendBox from "./friendBox";
const friendList=()=>{    
    const {friends}=useFriendInfo(state=>state);
    
    return (      
        <div className="mt-6">
        <h2 className="mb-6 text-lg font-bold text-gray-700">친구 리스트</h2>
        <ul>
            {
                friends.map((friend,index)=>{
                    return(
                        <FriendBox id={index} friend={friend}></FriendBox>
                    )
                })
            }
        </ul>
      </div> 
    )
}

export default friendList