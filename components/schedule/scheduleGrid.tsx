import scheduleInfo from '../../types/scheduleInfo'

function scheduleGrid({schedule}:{schedule:scheduleInfo}){
    return(        
        <div className="h-5 bg-blue-500" role={'button'}>
            <span className='flex overflow-hidden items-center'>
                <span className='flex-initial'>
                    shceduleGridz
                </span>
            </span>
        </div>  
    )
}

export default scheduleGrid