import friendInfo from "../types/friendInfo";
import create from 'zustand'
import axios from '../api/axiosInstance';

interface FriendDataInfo{
    nowFriend: friendInfo|null;
    friends:friendInfo[];
    searchFriends:friendInfo[];
    searchUser:(email:string)=>void;
    requestFriend:(userId:string,friendId:string)=>void;
}

export const useFriendInfo=create<FriendDataInfo>((set) => ({
    friends:[],
    searchFriends:[],
    nowFriend:null,
    searchUser:(email)=>{
        axios.post('/user/email',{
            email:email
        }).then((result)=>{
            set(()=>({
                searchFriends:[...result.data.body.data]
            }))
        })
    },
    requestFriend:(userId,friendId)=>{
        axios.post('/friends/request',{
            sendUserId:userId,
            receiveUserId:friendId
        }).then(()=>{
            
        })
    }
}));