import create from 'zustand'
import snsLoginInfo from '../types/snsLoginInfo';

export const useSnsLoginInfo = create<snsLoginInfo>((set) => ({
  accessToken:'',
  snsType:'',
  setAccessToken:(accessToken)=>{
    set(()=>({
        accessToken:accessToken
    }))
  },
  setSnsType:(snsType)=>{
    set(()=>({
        snsType:snsType
    }))
  }
}));