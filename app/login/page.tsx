export default function Page(){
    return(
        <div className="flex justify-center px-6 pb-16 mt-20 sm:mt-32 sm:px-0">
            <div className="w-full max-w-md">                
            <h2 className="mt-6 text-2xl font-bold text-center sm:text-3xl">
                MiniCalendar에 오신것을 환영합니다.
                </h2>   
                <div className="mx-4 sm:mx-0">
                <div className="mt-8">
                    <span className="text-sm font-medium">SNS 로그인 추가예정</span>
                    <div className="grid grid-cols-3 gap-3 mt-1">                    
                    </div>
                </div>
                <div className="relative mt-7">
                    <div className="absolute inset-0 flex items-center">
                    <div
                        className="w-full border-t border-gray-500/30 dark:border-gray-500/70"
                    ></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-white dark:bg-gray-800"
                        >MiniCalendar 아이디로 로그인</span
                    >
                    </div>
                </div>
                <form className="mt-8 space-y-6">
                    <div>
                    <div className="space-y-6 rounded-md shadow-sm">
                        <div>
                        <label                            
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >아이디</label
                        >
                        <div className="mt-1">
                            <input
                            id="user-id"
                            type="text"                            
                            className="block w-full px-3 py-2 text-sm border rounded-md shadow-sm appearance-none border-gray-500/30 placeholder-gray-500/80 focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20 sm:text-base"
                            name="userId"
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
                        type="submit"
                        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-400 focus:outline-none"
                    >
                        로그인
                    </button>
                    </div>
                    <p className="flex items-center justify-center space-x-1 text-sm">
                    <span>아직 회원이 아니신가요?</span
                    ><a
                        className="flex items-center text-blue-500 underline hover:text-blue-400"
                        href="/signup"
                        >회원가입</a
                    >
                    </p>
                </form>
                </div>
            </div>
        </div>
    )
}
