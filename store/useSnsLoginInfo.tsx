import create from 'zustand'
import snsLoginInfo from '../types/snsLoginInfo';

export const useSnsLoginInfo = create<snsLoginInfo>((set) => ({
    snsEmail:'',
  snsType:'',
  setEmail:(snsEmail)=>{
    set(()=>({
        snsEmail:snsEmail
    }))
  },
  setSnsType:(snsType)=>{
    set(()=>({
        snsType:snsType
    }))
  }
}));