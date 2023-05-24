import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        // <header className='bg-[#00878A] text-white'>
        <header className='bg-[#00878A] max-w-[1350px] m-auto px-12 text-white'>
            <div className='max-w-[1250px] py-4 m-auto flex justify-between'>
                <div className='flex'>
                    <div className='flex gap-x-14'>
                        <Image src={'/Noad.png'} alt='Noad' width={54} height={31} />
                        <div className='md:flex gap-x-14 hidden'>
                            <Link href={'/'}>Explore</Link>
                            <Link href={'/'}>My Trips</Link>
                            <Link href={'/'}>Chats</Link>
                        </div>
                    </div>
                </div>
                <div className='md:flex gap-x-14 hidden'>
                    <Link href={'/'}>My Home</Link>
                    <Link href={'/'}>My Account</Link>
                </div>
            </div>
        </header>
    )
}
