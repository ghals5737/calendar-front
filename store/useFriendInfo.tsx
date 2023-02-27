import friendInfo from "../types/friendInfo";
import create from 'zustand'
import axios from '../api/axiosInstance';

interface FriendDataInfo{
    nowFriend: friendInfo|null;
    friends:friendInfo[];
    searchFriends:friendInfo[];
    searchUser:(email:string)=>void;
    requestFriend:(userId:string,friendId:string)=>void;
    acceptFriend:(notiId:string,sendUserId:string,receiveUserId:string)=>void;
    setFriend:(friend:friendInfo)=>void;
    getFriendList:(userId:string)=>void;
}

export const useFriendInfo=create<FriendDataInfo>((set) => ({
    friends:[{userId:1,email:'test',nickname:'test'}],
    searchFriends:[],
    nowFriend:null,
    setFriend:(friend)=>{
        set(()=>({
            nowFriend:friend
        }))
    },
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
    },
    acceptFriend:(notiId,sendUserId,receiveUserId)=>{
        axios.post('/friends/accept',{
            notiId:notiId,
            sendUserId:sendUserId,
            receiveUserId:receiveUserId
        }).then((result)=>{
            
        })
    },
    getFriendList:(userId)=>{
        axios.get(`/friends/users/${userId}`)
        .then((result)=>{
            set(()=>({
                friends:[...result.data.body.data]
            }))            
        })
    }
}));