'use client';
import { useFriendInfo } from "../../store/useFriendInfo";
import SearchFriendBox from "./searchFriendBox";
const searchFriendList=()=>{    
    const {searchFriends}=useFriendInfo(state=>state);
    
    return (      
        <div className="mt-6">
        <h2 className="mb-6 text-lg font-bold text-gray-700">친구 리스트</h2>
        <ul>
            {
                searchFriends.map((friend,index)=>{
                    return(
                        <SearchFriendBox id={index} friend={friend}></SearchFriendBox>
                    )
                })
            }
        </ul>
      </div> 
    )
}

export default searchFriendList