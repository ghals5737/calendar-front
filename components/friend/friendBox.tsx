import friendInfo from "../../types/friendInfo";

const friendBox=({id,friend}:{id:number,friend:friendInfo})=>{
    return (<li className="flex items-center justify-between py-2 border-b hover:bg-gray-200">
                <div>
                <h3 className="font-bold text-gray-700">{friend.nickname}</h3>
                <p className="text-base text-gray-500">{friend.email}</p>
                </div>            
            </li>)
}

export default friendBox;