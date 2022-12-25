import Header from './header'
import SideBar from './sidebar'

function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full dark:bg-gray-800 dark:text-gray-100 text-gray-900'>
      <Header /> 
      <main className="h-full">
        <SideBar />
        {children}
      </main>      
    </div>
  )
}

export default BasicLayout