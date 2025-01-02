"use client"
import React from 'react'
import JobList from '../Components/JobsList'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const jobs = () => {
  useEffect(() => {
      AOS.init({
        duration: 700, // Animation duration in ms
        once: true,    // Whether animation should happen only once
      });
    }, []);

  return (
    <>
      <Navbar/>
        <div className='flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-100'>
          <h1 data-aos="fade-up" className="sm:text-5xl text-3xl py-5 mt-10 text-center text-black font-bold">Current Job Openings</h1>
          <div data-aos="fade-up" className='flex-grow overflow-auto'>
            <JobList/>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default jobs