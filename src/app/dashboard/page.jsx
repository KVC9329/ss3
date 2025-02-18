"use client"
import { UserButton, useUser, isLoaded, isSignedIn } from '@clerk/nextjs'
import Tabsview from '../Components/Tabs'
import { useRouter } from 'next/navigation'

const getData = async () => {
  const res = await fetch('https://script.google.com/macros/s/AKfycbz-eaudNZH9o2I_Q3VA_pXdgkTV6bDqO3GmSTqXsmGS6YxVDQ8qhMv-uXBd-l--JJd0Rg/exec', { cache: 'force-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Dashboard = () => {
  const {isLoaded, isSignedIn, user} = useUser()
  const router = useRouter()

  console.log(user)
    if (!isLoaded) {
      return <div className="flex flex-col pt-52 items-center h-screen">
      <div className="content-center w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        <p className="text-black">Loading...</p>
      </div>
    }

    const firstName = user?.firstName || "Guest";  // Fallback to "Guest" if firstName is undefined
    const fullName = user?.fullName || "";
    const email = user?.primaryEmailAddress?.emailAddress || "";
  return (
    <>
      <div className='grid grid-cols-12 gap-2 m-5'>
        <div className='col-span-12 sm:col-span-9 text-start'>
        <h1 className='sm:hidden text-5xl text-end sm:pr-7'><UserButton /></h1>
        <h1 className='text-2xl'>Hello, <span className='text-green-500'>{firstName}</span> <br/> Welcome to your dashboard</h1>
        </div>
        <div className='hidden sm:block sm:col-span-3 border-left-2 border-r-2 border-green-800'>
          <h1 className='text-5xl text-end pr-7'><UserButton /></h1>
          <h1 className='text-2xl text-end pr-5'>{fullName}</h1>
          <h1 className='text-md text-end pr-5'>{email}</h1>
        </div>
      </div>
      <div className='flex justify-start px-5'>
          <Tabsview/>
      </div>
    </>
  )
}

export default Dashboard