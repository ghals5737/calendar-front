import {useState,useEffect} from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Link from 'next/link'

function header(){  
  //const [theme,setTheme]=useState('light')  
  const [isDarkMode, setDarkMode] = useState(false);

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
  useEffect(() => {
    // 처음에 다크모드인지 판단해서 뿌려주기 !! ( 나중에는 상태관리를 해도 괜찮습니다 ! )
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return(
    <header className="w-full h-16 border-b-2 border-gray-100">      
      <div className="items-center h-16 flex float-right pr-8">
        <div className='flex relative'>
          <DarkModeSwitch
            style={{ width:'35px'}}
            checked={isDarkMode}
            onChange={toggleTheme}
            sunColor={'#FFE000'}
            size={120}
          />
        </div>
        <div className='flex relative'>
          <Link href={'/signup'}>
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
      </div>
    </header>
  )
}

export default header