import React from 'react'
import JobList from '../Components/JobsList'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const jobs = () => {
  return (
    <>
      <Navbar/>
        <div className='flex flex-col min-h-screen bg-gradient-to-b from-pink-800 to-black'>
          <h1 className="sm:text-5xl text-3xl py-5 mt-10 text-center text-white font-bold">Current Job Openings</h1>
          <div className='flex-grow overflow-auto'>
            <JobList/>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default jobs