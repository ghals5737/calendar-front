import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import notiInfo from '../types/notiInfo';
import axios from '../api/axiosInstance';

interface NotiDataInfo {    
   notiList:notiInfo[];
   getNotiList:(userId:string)=>void;
   removeNoti:(notiId:number)=>void;
}  

export const useNoti = create<NotiDataInfo>((set) => ({
    notiList:[],
    getNotiList:(userId)=>{
      axios.get(`/notis/users/${userId}`)
      .then((result)=>{
         set(()=>({
            notiList:[...result.data.body.data]
         }))
      })
    },
    removeNoti:(notiId)=>{
        set((state)=>({
            notiList:state.notiList.filter((noti)=>noti.notiId!==notiId)
        }))
    }
}));