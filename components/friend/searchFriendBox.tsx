import friendInfo from "../../types/friendInfo";
import { useFriendInfo } from '../../store/useFriendInfo';
import { useModal } from '../../store/useModal';

const searchFriendBox=({id,friend}:{id:number,friend:friendInfo})=>{
    const {requestFriend}=useFriendInfo(state=>state)
    const {closeAddFriendModal}=useModal(state=>state);
    
    const request=()=>{
        requestFriend(sessionStorage.getItem("userId")!,String(friend.userId))
        closeAddFriendModal()
    }
    
    return (<li className="flex items-center justify-between py-2 border-b hover:bg-gray-200">
                <div>
                <h3 className="font-bold text-gray-700">{friend.nickname}</h3>
                <p className="text-base text-gray-500">{friend.email}</p>
                </div>   
                <button 
                onClick={request}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                    친구 요청</button>         
            </li>)
}

export default searchFriendBox;