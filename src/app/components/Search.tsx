import React from 'react'
import Image from 'next/image'

export default function Search() {
    return (
        <div className='max-w-[1350px] m-auto mt-14 md:px-12 px-8 text-white'>
            <h1 className='text-2xl text-black'>Explore Options</h1>
            <div className='bg-[#E6F3F3] max-w-[1040px] text-center md:text-start rounded-2xl md:grid grid-flow-col justify-between p-10 mt-4 md:space-y-0 space-y-5'>
                <div className='grid col-span-5'>
                    <h1 className='text-[#004446] font-medium'>Where do you want to go</h1>
                    <input type="search" id="default-search" className="text-black mt-2 w-full border border-[#00878A] p-2 input" placeholder="Search destinations" required />
                </div>
                <div className='grid col-span-2'>
                    <h1 className='text-[#004446] font-medium'>Select dates</h1>
                    <div className="relative flex mt-2 ">
                        <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
                            <Image src={'/Calendar.svg'} alt='' width={16} height={16} />
                        </div>
                        <input type="search" id="default-search" className="text-[#00878A] w-full border border-[#00878A] p-2 input pl-9 " placeholder="17 May 2023 → 23 May 2023" required
                        />
                    </div>
                </div>
                <div className='grid justify-items-center col-span-1' >
                    <button className='bg-[#00888B] px-20 py-2 rounded-lg mt-8'>Search</button>
                </div>
            </div>
        </div>
    )
}
