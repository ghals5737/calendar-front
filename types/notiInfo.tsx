enum notiType{
    FRIEND_REQUEST="FRIEND_REQUEST",
    FRIEND_ACCEPT="FRIEND_ACCEPT",
    FRIEND_DECLINE="FRIEND_DECLINE"
}
interface notiInfo {  
    notiId:number;
    notiType:notiType;
    sendUserId:number;
    nickname:string;
    email:string;
}  

export default notiInfo