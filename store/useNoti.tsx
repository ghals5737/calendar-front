import create from 'zustand'
import daysInfo from '../types/calendarInfo'
import moment from 'moment'
import notiInfo from '../types/notiInfo';
import axios from '../api/axiosInstance';

interface NotiDataInfo {    
   notiList:notiInfo[];
}  

export const useNoti = create<NotiDataInfo>((set) => ({
    
}));