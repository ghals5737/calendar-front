import create from 'zustand'
import userInfo from '../types/userInfo';
import axios from '../api/axiosInstance';

interface UserDataInfo {        
    addUser: () => void;    
    createUser: (user:userInfo) => void;  
}  

export const useUser = create<UserDataInfo>((set) => ({    
    addUser:()=>{
        
    },
    createUser:(user)=> {
        axios.post('/user',{
            nickname:user.nickname,
            email:user.email,
            birthday:user.birthday,            
            password:user.password
        }).then((result)=>{
            console.log("data>",result.data.body.data)
            //userId=result.data.body.data.id
            sessionStorage.setItem("nickName",result.data.body.data.nickName)
        })                         
    },
}));