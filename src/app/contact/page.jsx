"use client"
import React, {useEffect} from 'react'
import Form from '../Components/Form'
import { PiBuildingsFill } from "react-icons/pi";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
      AOS.init({
        duration: 700, // Animation duration in ms
        once: true,    // Whether animation should happen only once
      });
    }, []);

  return (
    <>
      <Navbar/>
        <div className="bg-gradient-to-b from-white to-blue-100 flex flex-col min-h-screen">
          <h1 data-aos="fade-up" className="sm:text-5xl text-3xl py-10 mt-10 text-center text-black font-bold">Contact us</h1>
          <div className='grid sm:grid-cols-2'>
            <div>
              <div className='flex flex-col pl-7 content-center'>
                <div className='flex items-center'>
                  <div data-aos="fade-up" className='text-7xl text-blue-800'><PiBuildingsFill /></div>
                  <p data-aos="fade-up" className="font-bold py-auto text-blue-800 text-xl sm:text-3xl ">JABALPUR RECRUITMENT CENTER :</p>
                </div>
                <p data-aos="fade-up" className="text-blue-800 py-5 px-2"><span className='font-bold'>Location : </span> 178, Manmohan Nagar, Madhotal, Near New ISBT, Jabalpur MP (482002)</p>
              </div>
            </div>
            <div data-aos="fade-up" className='content-center'>
              <Form/>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Contact