'use client';
import {useState,useEffect,Fragment } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Link from 'next/link'
import { useSwitchSideBar } from '../../store/useSwitchSideBar';
import {usePathname,useRouter} from 'next/navigation';
import { useCalendarInfo } from '../../store/useCalendarInfo';

function header(){  
  //const [theme,setTheme]=useState('light')  
  const [isDarkMode, setDarkMode] = useState(false);
  const [userId, setUserId] = useState<null|string>(null);
  const [nickname, setNickname] = useState<null|string>(null);
  const {isAddCalendar,openAddCalendar,closeAddCalendar}=useSwitchSideBar(state=>state)  
  const pathname  = usePathname()
  const router= useRouter()  
  const {getCalendars}=useCalendarInfo(state=>state);

  //const nickname = sessionStorage.getItem('nickname') : null;
  useEffect(()=>{
    setUserId(sessionStorage.getItem("userId"))
    setNickname(sessionStorage.getItem("nickname"))    
  },[])
  const logout=()=>{    
    if(typeof window !== 'undefined'){
      sessionStorage.removeItem("userId")
      sessionStorage.removeItem("nickname")
      sessionStorage.removeItem("calendarId")    
    }
    window.location.href = "/"
  }

  const toggleTheme=(checked: boolean)=>{    
    if (localStorage.getItem("theme") === "dark") {
      // 다크모드 -> 기본모드 
      localStorage.removeItem("theme"); // 다크모드 삭제
      document.documentElement.classList.remove("dark");  // html class에서 dark클래스 삭제 !  
      setDarkMode(checked);
    } else {
      // 기본모드 -> 다크모드
      document.documentElement.classList.add("dark"); // html의 class에 dark 클래스 추가 ! 
      localStorage.setItem("theme", "dark");  // localstorage에 dark를 추가해서 ! useEffect에서 처음에 검사해서 다크모드인지 판단해주려고 ! 
      setDarkMode(checked);
    }
  }

  const switchSideBar=()=>{
    //alert(isAddCalendar)
    if (userId === null) { 
      alert("로그인이 필요합니다.")                                                      
      return
    } 
    if(isAddCalendar==false){     
      openAddCalendar()      
      return      
    }
    closeAddCalendar()
  }

  const routeMain=()=>{
    closeAddCalendar()
    router.push('/')
  }

  

  useEffect(() => {
    // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return(
    <header className="w-full h-16 border-b-2 border-gray-100">
      <div className="flex items-center float-right h-16 pr-8">       
        {
          pathname==='/calendar/create'?
            <div onClick={routeMain} className="absolute left-2 w-7 h-7" aria-label="돌아가기" title="돌아가기" role="button">                
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </div>:
            <div onClick={switchSideBar} className="absolute left-2 w-7 h-7">        
              <svg focusable="false" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </svg>        
            </div>

            
        }  
        {nickname=== null ?
          <Fragment>
            <div className='relative flex'>
              <DarkModeSwitch
                style={{ width:'35px'}}
                checked={isDarkMode}
                onChange={toggleTheme}
                sunColor={'#FFE000'}
                size={120}
              />
            </div>
            <div className='relative flex'>
              <Link href={'/login'}>
                <button className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-gray-500/30 bg-white text-center text-xs font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 sm:flex lg:ml-10">
                  로그인
                </button>
              </Link>
              <Link href={'/signup'}>
                <button className="ml-2.5 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-transparent bg-blue-500 px-2 py-0.5 text-xs font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-offset-0 sm:flex">
                  회원가입
                </button>
              </Link>
            </div>
          </Fragment>:
          <div className='relative flex'>
            <label>{nickname}</label>
            <button 
            className="ml-2 hidden h-[35px] w-[85px] items-center justify-center rounded-3xl border border-gray-500/30 bg-white text-center text-xs font-medium text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none dark:border-gray-500/70 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 sm:flex lg:ml-10"
            onClick={logout}>
                  로그아웃
            </button>     
          </div>
          }
      </div>
    </header>
  )
}

export default header