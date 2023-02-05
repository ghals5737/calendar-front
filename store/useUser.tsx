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
                         
    },
}));