import Image from 'next/image'
import Header from './components/Header'
import Explore from './components/Explore'
import Search from './components/Search'

export default function Home() {
  return (
    <main className='bg-white'>
      <Header />
      <Explore />
      <Search />
    </main>
  )
}
