import Image from 'next/image'
import React from 'react'

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

const Gridcard = ({ elem }: any) => {
    return (
        <div className=''>
            <div className=' text-[#00878A] bg-[#E6F3F3] w-300px rounded-xl ' key={elem.id}>
                <Image src={elem.image} alt='Furniture' width={380} height={215} className='rounded-t-xl' />
                <div className='p-4'>
                    <h2 className='font-medium text-xs'>{elem.location}</h2>
                    <h1 className='font-semibold text-lg text-[#004446]'>{elem.title}</h1>
                    <h1 className='font-normal text-base '>{elem.description}</h1>
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
        </div>
    )
}

export default Gridcard 