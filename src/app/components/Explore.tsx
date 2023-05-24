'use client'
import React, { useState } from 'react'
import { furniture } from './Database'
import Gridcard from './Gridcard'
import Image from 'next/image'


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

    const [IsOpen, setIsOpen] = useState(false)
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
            <div className='max-w-[1350px] m-auto'>
                <div className=' px-8 md:px-12'>
                    <h1 className='font-semibold text-3xl text-[#00878A] pt-12'>Explore homes</h1>
                    <div className='grid grid-flow-col justify-between mt-6 gap-2'>
                        <div className="relative grid col-span-1">
                            <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
                                <Image src={'/Searchicon.svg'} alt='' width={16} height={16} />
                            </div>
                            <input type="search" id="default-search" className="text-black md:w-[170%]  border border-[#00878A] w-full  p-2 pl-9 input" placeholder="Search" required
                            />
                        </div>
                        <div className='flex'>
                            <select onChange={(event) => handleChange(event.target.value)} name="options" id="" className={`text-white bg-[#004446] ${!IsOpen ? 'hidden' : 'flex'} `}>
                                <option value="All">All</option>
                                <option value="1">1 Bedrooms</option>
                                <option value="2">2 Bedrooms</option>
                                <option value="3">3 Bedrooms</option>
                                <option value="4">4 Bedrooms</option>
                            </select>
                            <button onClick={() => setIsOpen((prev) => !prev)} className='rounded-xl py-3 md:px-8 px-5 gap-2 bg-[#E6F3F3] text-[#004446] flex'>
                                <Image src={'Filters.svg'} alt='' width={23} height={17} className='mt-1' />
                                <h1> Filters</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:pl-12 pl-8 max-w-[1350px] m-auto'>

                {/* <button onClick={() => setFilteredData(furniture)} className='text-red-500' >clear</button> */}


                <div className='mt-6'>
                    <h1 className='text-2xl text-black'>Top Picks For You - <span className='text-[#004446]'>Amsterdam</span></h1>
                    <div className='grid grid-flow-col mt-4 gap-3 overflow-x-scroll blabla'>
                        {filteredData.map((elem: FurnType) =>
                            <Gridcard elem={elem} />
                        )}
                    </div>
                </div>

                <div className='mt-14'>
                    <h1 className='text-2xl text-black'>Members looking to travel to your location - <span className='text-[#004446]'>Ljubjana</span></h1>
                    <div className='grid grid-flow-col mt-4 gap-3 overflow-x-scroll blabla'>
                        {filteredData.map((elem: FurnType) =>
                            <Gridcard elem={elem} />
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
