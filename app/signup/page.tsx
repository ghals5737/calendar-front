'use client'
import {useState,useEffect} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import DatePicker from "react-datepicker";
import { useUser } from "../../store/useUser"
import userInfo from '../../types/userInfo';
import axios from '../../api/axiosInstance';
import { useCalendarInfo } from '../../store/useCalendarInfo';
import calendarInfo from '../../types/calendarInfo';
import { redirect } from 'next/dist/server/api-utils';
import { PERMANENT_REDIRECT_STATUS } from 'next/dist/shared/lib/constants';
import moment from 'moment'
import Image from "next/image";
import naverLogo from '../../img/naver-btn.png'
import kakaoLogo from '../../img/kakao-btn.png'
import googleLogo from '../../img/google-btn.png'
import NaverLogin from '../../components/sns/NaverLogin';
import {getNaverInfo,NaverCallback} from '../../components/sns/NaverLogin';
import KaKaoLogin from '../../components/sns/KaKaoLogin';
import GoogleLogin from '../../components/sns/GoogleLogin';
import { useSnsLoginInfo } from "../../store/useSnsLoginInfo";
import decode from "jwt-decode";

export default function Page(){
    const {addCalendar}=useCalendarInfo(state=>state);
    const {createUser}=useUser(state=>state)
    const [nickname,setNickname]=useState('')    
    const [email,setEmail]=useState('') 
    const [birthday,setBirthday]=useState(new Date()) 
    const [password,setPassword]=useState('')   
    const {snsEmail,snsType}=useSnsLoginInfo()
    
    const signup=()=>{        
        axios.post('/user',{
            nickname:nickname,
            email:email,
            birthday:birthday,            
            password:password
        }).then((result)=>{            
            console.log("result>",result.data.body.data)
            sessionStorage.setItem("userId",result.data.body.data.userId)
            sessionStorage.setItem("nickname",result.data.body.data.nickname) 
            
            addCalendar(
                sessionStorage.getItem("userId")!
                ,{
                    calendarId:0,
                    title:sessionStorage.getItem("nickname")!,
                    description:sessionStorage.getItem("nickname")!+'님의 달력',
                    color:'red',
                    category:'def'
            })     
            window.location.href = "/";
        })         
    }

    const snsSignup=(email:string,snsType:string,birthday:Date|null)=>{        
        axios.post('/user/sns',{            
            email:email,
            snsType:snsType,            
            birthday:birthday
        }).then((result)=>{            
            console.log("result>",result.data.body.data)
            sessionStorage.setItem("userId",result.data.body.data.userId)
            sessionStorage.setItem("nickname",result.data.body.data.nickname) 
            
            addCalendar(
                sessionStorage.getItem("userId")!
                ,{
                    calendarId:0,
                    title:sessionStorage.getItem("nickname")!,
                    description:sessionStorage.getItem("nickname")!+'님의 달력',
                    color:'red',
                    category:'def'
            })     
            window.location.href = "/";
        })         

    }

    useEffect(() => {
        const userData = getNaverInfo();       
        
        if (userData) {               
            console.log("userData",userData)
            snsSignup(userData.email,'NAVER',null) 
        }       
    }, [snsEmail]);

    

    const successHandlerKaKao = (data:any) => {
        console.log("data",data);
        snsSignup(data.kakao_account.email,'KAKAO',null)        
    }
    
    const failHandlerKaKao = (err:any) => {
        console.log(err)
    }


    const successHandlerGoogle = (data:any) => {
        const userInfo=decode<any>(data.credential)        
        console.log("userInfo",userInfo);
        snsSignup(userInfo.email,'GOOGLE',null)                
      }
    
      const failHandlerGoogle = (err:any) => {
        console.log(err)
      }
    
    return(       
        <div className="flex justify-center px-6 pb-16 mt-20 sm:mt-32 sm:px-0">
            <div className="w-1/3 max-w-md">                
                <h2 className="mt-6 text-2xl font-bold text-center sm:text-3xl">
                MiniCalendar 오신것을 환영합니다.
                </h2>                
                <div className="mx-4 sm:mx-0">
                <div className="mt-8">
                    <span className="text-sm font-medium">SNS 회원가입</span>
                    <div className="grid grid-cols-3 gap-3 mt-1">
                        <NaverLogin
                                token={"dLiylAdbHmAPNv4dvQBQ"}
                                callbackUrl={"http://localhost:3000/callback"}
                                render={() =><button>                            
                                                <Image src={naverLogo} alt="blabla Logo" />                            
                                            </button>}
                        />
                        <KaKaoLogin 
                            token={"da1341fca7194ea3f896379a7993384f"} 
                            successCallback = {successHandlerKaKao}
                            fail = {failHandlerKaKao}
                            render ={() =><button>
                                                <Image src={kakaoLogo} alt="blabla Logo" />                            
                                            </button>}
                        />    
                        <GoogleLogin 
                            token={"684748789705-419aln9eqrnfo58vno506sr69rs3f58i.apps.googleusercontent.com"} 
                            success = {successHandlerGoogle}
                            fail = {failHandlerGoogle}
                            render ={() => <button>
                                                <Image src={googleLogo} alt="blabla Logo" />                            
                                            </button>}
                        />
                    
                    </div>
                </div>
                <div className="relative my-7">
                    <div className="absolute inset-0 flex items-center">
                    <div
                        className="w-full border-t border-gray-500/30 dark:border-gray-500/70"
                    ></div>
                    </div>
                    <div className ="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-white dark:bg-gray-800"
                        >회원가입에 필요한 기본정보를 입력해주세요.</span
                    >
                    </div>
                </div>
                
                    <input type="hidden" name="remember" value="true" />
                    <div>
                    <div className="space-y-6 rounded-md shadow-sm">                        
                        <div>
                            <label                            
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                >이메일</label
                            >
                            <div className="mt-1">
                                <input
                                id="email-address"
                                type="email"
                                className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                                placeholder="munchkin@okky.kr"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                        <label                            
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >비밀번호</label>
                        <div className="mt-1">
                            <input
                            id="password"
                            type="password"                            
                            className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                            placeholder="최소 6자 이상(알파벳, 숫자 필수)"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        </div>
                                                
                        <div>
                        <label                           
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >닉네임</label>
                        <div className="mt-1">
                            <input
                            id="nickname"
                            type="text"                            
                            className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                            placeholder="별명을 알파벳, 한글, 숫자를 20자 이하로 입력해주세요."
                            name="nickname"
                            value={nickname}
                            onChange={(e)=>setNickname(e.target.value)}
                            />
                        </div>
                        </div>
                        <div>
                            <label                           
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >생년월일</label>
                            <div className="inset-y-0 left-0 flex items-center pl-3 outline-none pointer-events-none">
                                <svg aria-hidden="true" 
                                className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path>
                                </svg>
                            </div>                                    
                            <DatePicker
                                selected={birthday}
                                onChange={(date:Date) => setBirthday(date)}
                                dateFormat="MM월 dd일 (eee)"
                                selectsStart                                        
                                locale={ko}                                  
                                className="
                                w-[150px] 
                                text-center outline-none 
                                dark:bg-gray-800 
                                dark:border-gray-600 
                                dark:placeholder-gray-400 
                                dark:text-white 
                                dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" 
                                timeInputLabel="시간:"   
                                showTimeInput                                 
                            />
                        </div>
                    </div>
                    </div>   
                    <div>
                    <button                        
                        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none disabled:bg-blue-500 disabled:opacity-40"
                        onClick={signup}                        
                    >
                        회원가입
                    </button>
                    </div>
                    <p className="flex items-center justify-center space-x-1 text-sm">
                    <span>이미 회원이신가요?</span
                    ><a
                        className="flex items-center text-blue-500 underline hover:text-blue-400"
                        href="/login"
                        >로그인</a
                    >
                    </p>                
                </div>
            </div>
            </div>

    )
}