import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import notiInfo from '../types/notiInfo';
import axios from '../api/axiosInstance';

interface NotiDataInfo {    
   notiList:notiInfo[];
   getNotiList:(userId:string)=>void;
   deleteNotiList:(notiId:number)=>void;
}  

export const useNoti = create<NotiDataInfo>((set) => ({
    notiList:[],
    getNotiList:(userId)=>{
      axios.get(`/notis/users/${userId}`)
      .then((result)=>{
         console.log('notilist',result.data.body.data)
         set(()=>({
            notiList:[...result.data.body.data]
         }))
      })
    },
    deleteNotiList:(notiId)=>{
      set((state)=>({
         notiList:state.notiList.filter(el=>el.notiId!=notiId)
      }))
    }
}));