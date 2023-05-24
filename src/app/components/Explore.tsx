import Image from 'next/image'
import React from 'react'
import { Furniture } from './Database'

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
    return (
        <main>
            <div className='max-w-[1250px] m-auto'>
                <h1 className='font-semibold text-3xl text-[#00878A] pt-12'>Explore homes</h1>
                <div className='flex justify-between mt-6'>
                    <div className="relative flex w-full">
                        <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
                            <Image src={'/Searchicon.svg'} alt='' width={16} height={16} />
                        </div>
                        <input type="search" id="default-search" className="text-black w-[416px] border border-[#00878A] bg-transparent p-2 pl-10 placeholder:pl-1 rounded-lg placeholder:text-[#919191]" placeholder="Search" required
                        />
                    </div>
                    <button className='rounded-xl py-3 px-6 gap-2 bg-[#E6F3F3] text-[#004446] flex'>
                        <Image src={'Filters.svg'} alt='' width={23} height={17} className='mt-1' />Filters
                    </button>
                </div>
                <div>
                    <div className='mt-6'>
                        <h1 className='text-2xl text-black'>Top Picks For You - <span className='text-[#004446]'>Amsterdam</span></h1>
                        <div className='grid grid-cols-4 mt-4 gap-3'>
                            {Furniture.map((elem: FurnType) =>
                                <div className=' text-[#00878A] bg-[#E6F3F3] rounded-xl' key={elem.id}>
                                    <Image src={elem.image} alt='Furniture' width={380} height={215} className='rounded-t-xl' />
                                    <div className='p-4'>
                                        <h2 className='font-medium text-xs'>{elem.location}</h2>
                                        <h1 className='font-semibold text-lg text-[#004446]'>{elem.title}</h1>
                                        <h1 className='font-normal text-base'>{elem.description}</h1>
                                        <div className='text-[#004446] font-medium flex gap-4'>
                                            <span className='flex gap-1'>
                                                <Image src={'Bedrooms.svg'} alt='' width={20} height={20} />{elem.bedrooms}</span>
                                            <span className='flex gap-1'>
                                                <Image src={'/Workstations.svg'} alt='' width={18} height={11} />{elem.workstations}</span>
                                            <span className='flex gap-1'>
                                                <Image src={'/Bathrooms.svg'} alt='' width={20} height={20} />{elem.bathrooms}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='mt-14'>
                        <h1 className='text-2xl text-black'>Members looking to travel to your location - <span className='text-[#004446]'>Ljubjana</span></h1>
                        <div className='grid grid-cols-4 mt-4 gap-3'>
                            {Furniture.map((elem: FurnType) =>
                                <div className=' text-[#00878A] bg-[#E6F3F3] rounded-xl' key={elem.id}>
                                    <Image src={elem.image} alt='Furniture' width={380} height={215} className='rounded-t-xl' />
                                    <div className='p-4'>
                                        <h2 className='font-medium text-xs'>{elem.location}</h2>
                                        <h1 className='font-semibold text-lg text-[#004446]'>{elem.title}</h1>
                                        <h1 className='font-normal text-base'>{elem.description}</h1>
                                        <div className='text-[#004446] font-medium flex gap-4'>
                                            <span className='flex gap-1'>
                                                <Image src={'Bedrooms.svg'} alt='' width={20} height={20} />{elem.bedrooms}</span>
                                            <span className='flex gap-1'>
                                                <Image src={'/Workstations.svg'} alt='' width={18} height={11} />{elem.workstations}</span>
                                            <span className='flex gap-1'>
                                                <Image src={'/Bathrooms.svg'} alt='' width={20} height={20} />{elem.bathrooms}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='mt-14'>
                        <h1 className='text-2xl text-black'>Explore Options</h1>
                        <div className='bg-[#E6F3F3] w-[1000px] rounded-2xl flex justify-between place-items-center p-10 mt-4'>
                            <div>
                                <h1 className='text-[#004446] font-medium'>Where do you want to go</h1>
                                <input type="search" id="default-search" className="text-black mt-2 w-[416px] focus-visible: border border-[#00878A] bg-transparent p-2 placeholder:pl-1 rounded-lg placeholder:text-[#919191]" placeholder="Search destinations" required />
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
