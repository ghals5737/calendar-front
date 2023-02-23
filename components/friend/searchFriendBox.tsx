import friendInfo from "../../types/friendInfo";

const searchFriendBox=({id,friend}:{id:number,friend:friendInfo})=>{
    return (<li className="flex items-center justify-between py-2 border-b hover:bg-gray-200">
                <div>
                <h3 className="font-bold text-gray-700">{friend.nickname}</h3>
                <p className="text-base text-gray-500">{friend.email}</p>
                </div>   
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                    친구 추가</button>         
            </li>)
}

export default searchFriendBox;