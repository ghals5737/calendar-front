'use client'
import axios from '../../api/axiosInstance';
import { useCalendarInfo } from '../../store/useCalendarInfo';
import calendarInfo from '../../types/calendarInfo';
import {useState,useEffect } from 'react';
import Image from "next/image";
import naverLogo from '../../img/naver-btn.png'
import kakaoLogo from '../../img/kakao-btn.png'
import googleLogo from '../../img/google-btn.png'
import NaverLogin from '../../components/sns/NaverLogin';
import {getNaverInfo,NaverCallback} from '../../components/sns/NaverLogin';
import KaKaoLogin from '../../components/sns/KaKaoLogin';
import GoogleLogin from '../../components/sns/GoogleLogin';
import {usePathname,useSearchParams} from 'next/navigation';
import { useSnsLoginInfo } from "../../store/useSnsLoginInfo";
import {useRouter} from 'next/navigation'
import decode from "jwt-decode";

export default function Page(){    
    const [email,setEmail]=useState('') 
    const [password,setPassword]=useState('')       
    const {initCalendars}=useCalendarInfo(state=>state);           
    const router=useSearchParams()
    const {snsEmail,snsType}=useSnsLoginInfo()
      
    useEffect(() => {
        const userData = getNaverInfo();       
        //alert("!!")  
        // console.log("query",queryString.parse(location.hash));        
        if (userData) {     
            //console.log("query",queryString.parse(location.hash));
            console.log("userData",userData)
            snsLogin(userData.email,'NAVER')             
        }
    }, [snsEmail]);
    const testlogin=()=>{
        sessionStorage.setItem("userId","test")
            sessionStorage.setItem("nickname","test")
            //initCalendars(sessionStorage.getItem("userId")!) 
            window.location.href = "/";
    }

    const login=()=>{        
        axios.post('/user/login',{
            email:email,
            password:password
        }).then((result)=>{            
            sessionStorage.setItem("userId",result.data.body.data.userId)
            sessionStorage.setItem("nickname",result.data.body.data.nickname)
            initCalendars(sessionStorage.getItem("userId")!) 
            window.location.href = "/";
        })

    }

    const snsLogin=(email:string,snsType:string)=>{        
        axios.post('/user/sns-login',{
            email:email,
            snsType:snsType
        }).then((result)=>{            
            sessionStorage.setItem("userId",result.data.body.data.userId)
            sessionStorage.setItem("nickname",result.data.body.data.nickname)
            initCalendars(sessionStorage.getItem("userId")!) 
            window.location.href = "/";
        })

    }

    const successHandlerKaKao = (data:any) => {
        console.log("data",data);
        snsLogin(data.kakao_account.email,'KAKAO')        
    }
    
    const failHandlerKaKao = (err:any) => {
        console.log(err)
    }


    const successHandlerGoogle = (data:any) => {
        const userInfo=decode<any>(data.credential)        
        console.log("userInfo",userInfo);
        snsLogin(userInfo.email,'GOOGLE')                
      }
    
      const failHandlerGoogle = (err:any) => {
        console.log(err)
      }

    return(
        <div className="flex justify-center px-6 pb-16 mt-20 sm:mt-32 sm:px-0">
            <div className="w-full max-w-md">                
            <h2 className="mt-6 text-2xl font-bold text-center sm:text-3xl">
                MiniCalendar에 오신것을 환영합니다.
                </h2>   
                <div className="mx-4 sm:mx-0">               
                <div className="relative mt-4">
                    <div className="absolute inset-0 flex items-center">
                    <div
                        className="w-full border-t border-gray-500/30 dark:border-gray-500/70"
                    ></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-white dark:bg-gray-800">MiniCalendar 이메일로 로그인</span>
                    </div>
                </div>                
                <div>
                <div className="space-y-6 rounded-md shadow-sm">
                    <div>
                    <label                            
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >이메일</label
                    >
                    <div className="mt-1">
                        <input
                        id="email"
                        type="text"                            
                        className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    </div>
                    <div>
                    <label                            
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >비밀번호</label
                    >
                    <div className="mt-1">
                        <input
                        id="password"
                        type="password"                            
                        className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-end">
                <div className="space-x-2 text-sm">
                    <a className="text-blue-500 hover:text-blue-400" href="/forgot"
                    >계정찾기</a
                    >
                </div>
                </div>
                <div>
                <button                        
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none"
                    onClick={login}
                >
                    로그인
                </button>
                {/* <button                        
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none"
                    onClick={testlogin}
                >
                    테스트로그인
                </button> */}
                </div>
                <p className="flex items-center justify-center space-x-1 text-sm">
                <span>아직 회원이 아니신가요?</span
                ><a
                    className="flex items-center text-blue-500 underline hover:text-blue-400"
                    href="/signup"
                    >회원가입</a
                >
                </p>                
                </div>
            </div>
        </div>
    )
}