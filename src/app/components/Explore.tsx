'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { furniture } from './Database'
import Gridcard from './Gridcard'

interface FurnType {
    id: number,
    image: string,
    location: string,
    title: string,
    description: string,
    bedrooms: number,
    workstations: number,
    bathrooms: number,
}

export default function Explore() {

    const [filteredData, setFilteredData] = useState(furniture)

    const handleChange = (value: any) => {
        if (value == 'All') {
            setFilteredData(furniture)
        }
        else {

            setFilteredData(
                furniture.filter(
                    (item: FurnType) => item.bedrooms == value)
            )
        }
    }

    return (
        <main>
            <div className='max-w-[1450px] m-auto pl-16'>
                <div className='max-w-[1250px]'>
                    <h1 className='font-semibold text-3xl text-[#00878A] pt-12'>Explore homes</h1>
                    <div className='flex justify-between mt-6'>
                        <div className="relative flex w-full">
                            <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
                                <Image src={'/Searchicon.svg'} alt='' width={16} height={16} />
                            </div>
                            <input type="search" id="default-search" className="text-black md:w-[416px] w-[150px] border border-[#00878A] focus-visible:outline-none bg-transparent p-2 pl-10 placeholder:pl-1 rounded-lg placeholder:text-[#919191]" placeholder="Search" required
                            />
                        </div>
                        <button className='rounded-xl py-3 md:px-6 px-8 gap-2 bg-[#E6F3F3] text-[#004446] flex'>
                            <Image src={'Filters.svg'} alt='' width={23} height={17} className='mt-1' />
                            <h1> Filters</h1>
                        </button>
                    </div>
                </div>

                <div>
                    <select onChange={(event) => handleChange(event.target.value)} name="options" id="" className='text-black'>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <button onClick={() => setFilteredData(furniture)} className='text-red-500' >clear</button>
                    {/* <div className='mt-6'>
                        <h1 className='text-2xl text-black'>Top Picks For You - <span className='text-[#004446]'>Amsterdam</span></h1>
                        <div className='grid md:grid-cols-4 min-[400px]:grid-cols-2 grid-cols-1 mt-4 gap-3 blabla'>
                            {filteredData.map((elem: FurnType) =>
                                <Gridcard elem={elem} />
                            )}
                        </div>
                    </div> */}
                    <div className='mt-6'>
                        <h1 className='text-2xl text-black'>Top Picks For You - <span className='text-[#004446]'>Amsterdam</span></h1>
                        <div className='flex mt-4 gap-3 blabla'>
                            {filteredData.map((elem: FurnType) =>
                                <Gridcard elem={elem} />
                            )}
                        </div>
                    </div>

                    <div className='mt-14'>
                        <h1 className='text-2xl text-black'>Members looking to travel to your location - <span className='text-[#004446]'>Ljubjana</span></h1>
                        <div className='flex mt-4 gap-3 blabla'>
                            {filteredData.map((elem: FurnType) =>
                                <Gridcard elem={elem} />
                            )}
                        </div>
                    </div>

                    <div className='mt-14'>
                        <h1 className='text-2xl text-black'>Explore Options</h1>
                        <div className='bg-[#E6F3F3] w-[1000px] rounded-2xl flex justify-between place-items-center p-10 mt-4'>
                            <div>
                                <h1 className='text-[#004446] font-medium'>Where do you want to go</h1>
                                <input type="search" id="default-search" className="text-black focus-visible:outline-none mt-2 w-[416px] focus-visible: border border-[#00878A] bg-transparent p-2 placeholder:pl-1 rounded-lg placeholder:text-[#919191]" placeholder="Search destinations" required />
                            </div>
                            <div>
                                <h1 className='text-[#004446] font-medium'>Select dates</h1>
                                <button className='bg-[#00888B] px-20 py-2 rounded-lg mt-2'>Search</button>
                            </div>
                            <button className='bg-[#00888B] px-20 py-2 rounded-lg mt-8'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
