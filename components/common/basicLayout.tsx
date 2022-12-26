import Header from './header'
import SideBar from './sidebar'
import { useSwitchSideBar } from '../../store/useSwitchSideBar';
import AddCalendarSideBar from './addCalendarSideBar';

function BasicLayout({ children }: { children: React.ReactNode }) {
  const {isAddCalendar}=useSwitchSideBar(state=>state)

  return (
    <div className='h-full text-gray-900 dark:bg-gray-800 dark:text-gray-100'>
      <Header /> 
      <main className="h-full">
        {isAddCalendar?<AddCalendarSideBar/>:<SideBar/>}        
        {children}
      </main>      
    </div>
  )
}

export default BasicLayout