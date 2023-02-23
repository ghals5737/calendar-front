import friendInfo from "../types/friendInfo";
import create from 'zustand'

interface FriendDataInfo{
    nowFriend: friendInfo|null;
    friends:friendInfo[];
    searchFriends:friendInfo[];

}

export const useFriendInfo=create<FriendDataInfo>((set) => ({
    friends:[{id:1,email:'test1@test.com',nickname:'test1'},{id:2,email:'test2@test.com',nickname:'test2'},{id:3,email:'test3@test.com',nickname:'test3'}],
    searchFriends:[{id:1,email:'test1@test.com',nickname:'test1'},{id:2,email:'test2@test.com',nickname:'test2'},{id:3,email:'test3@test.com',nickname:'test3'}],
    nowFriend:null,

}));