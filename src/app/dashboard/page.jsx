'use client'

import React from 'react'
import { UserButton, useUser, isLoaded, isSignedIn } from '@clerk/nextjs'
import { ChartComponent } from '../Components/Chart'

const dashboard = () => {
  const {isLoaded, isSignedIn, user} = useUser()
  console.log(user)
    if (!isLoaded) {
      return <div className="flex flex-col pt-52 items-center h-screen">
      <div className="content-center w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      <p className="text-black">Loading...</p>
</div>
    }

    if (!isSignedIn) {
      // You could also add a redirect to the sign-in page here
      return null
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
          <h1>content</h1>
          <ChartComponent/>
        </div>
        <div className='hidden sm:block sm:col-span-3 border-left-2 border-r-2 border-green-800'>
          <h1 className='text-5xl text-end pr-7'><UserButton /></h1>
          <h1 className='text-2xl text-end pr-5'>{fullName}</h1>
          <h1 className='text-md text-end pr-5'>{email}</h1>
        </div>
      </div>
    </>
  )
}

export default dashboard