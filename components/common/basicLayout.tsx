import Header from './header'
import SideBar from './sidebar'

function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Header /> 
      <main className="h-full">
        <SideBar />
        {children}
      </main>      
    </div>
  )
}

export default BasicLayout