import React from 'react'

export default function Explore() {
    return (
        <main>
            <div className='max-w-[1250px] m-auto'>
                <h1 className='font-semibold text-3xl text-[#00878A] pt-14'>Explore homes</h1>
                <div className='flex justify-between mt-8'>
                    <div className="relative flex w-full">
                        <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 11.5L15 15" stroke="#00878A" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 7C1 10.3137 3.68629 13 7 13C8.6597 13 10.1621 12.3261 11.2483 11.237C12.3308 10.1517 13 8.654 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7Z" stroke="#00878A" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className=" w-[416px] border border-[#00878A] bg-transparent p-2 pl-10 placeholder:pl-1 rounded-lg placeholder:text-[#919191]" placeholder="Search" required
                        />
                    </div>
                    <button className='rounded-xl py-3 px-6 gap-2 bg-[#E6F3F3] text-[#004446] flex'>
                        <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-1'>
                            <path d="M1 3.23828H22.0476" stroke="#004446" stroke-linecap="round" />
                            <path d="M22.0476 13.7617L0.999988 13.7617" stroke="#004446" stroke-linecap="round" />
                            <circle cx="15.5713" cy="3.2381" r="2.7381" fill="#E6F3F3" stroke="#004446" />
                            <circle cx="7.47626" cy="13.7619" r="2.7381" transform="rotate(180 7.47626 13.7619)" fill="#E6F3F3" stroke="#004446" />
                        </svg>Filters
                    </button>
                </div>
                <div className='mt-8'>
                    <h1 className='text-2xl text-black'>Top Picks For You - <span className='text-[#004446]'>Amsterdam</span></h1>
                    <h1 className='text-2xl text-black'>Members looking to travel to your location - <span className='text-[#004446]'>Ljubjana</span></h1>
                    <h1 className='text-2xl text-black'>Explore Options</h1>
                    <div className='bg-[#E6F3F3] w-[1000px] h-[100px] rounded-2xl flex justify-center place-items-center'>
                        <div>
                            <button className='bg-[#00888B] px-20 py-2 rounded-lg'>Search</button>
                            <button className='bg-[#00888B] px-20 py-2 rounded-lg'>Search</button>
                            <button className='bg-[#00888B] px-20 py-2 rounded-lg'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
