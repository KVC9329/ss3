import React from 'react'
import Form from '../Components/Form'
import { GiIndiaGate } from "react-icons/gi";
import { GiIndianPalace } from "react-icons/gi";
import { PiBuildingsFill } from "react-icons/pi";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const contact = () => {
  return (
    <>
      <Navbar/>
        <div className="bg-gradient-to-b from-indigo-800 to-black flex flex-col min-h-screen">
          <h1 className="sm:text-5xl text-3xl py-10 mt-10 text-center text-white font-bold">Contact us</h1>
          <div className='grid sm:grid-cols-2'>
            <div>
              <div>
                <div className='flex items-center'>
                  <div className='text-7xl text-white'><GiIndiaGate /></div>
                  <p className="font-bold text-white text-xl sm:text-3xl inline-block align-text-bottom">DELHI RECRUITMENT CENTER :</p>
                </div>
                <p className="text-white py-5 px-2"><span className='font-bold'>Location : </span> 4th Floor, Guru Nanak Market, 15, 600 Meters From Mool Chand Metro, above Kings & Queen Salon, Part 4, Lajpat Nagar, New Delhi, Delhi 110024</p>
              </div>

              <div>
                <div className='flex items-center'>
                  <div className='text-7xl text-white px-2'><GiIndianPalace /></div>
                  <p className="font-bold text-white text-xl sm:text-3xl py-auto">LUCKNOW RECRUITMENT CENTER :</p>
                </div>
                <p className="text-white py-5 px-2"><span className='font-bold'>Location : </span> 1-A, Sapru Marg, 1st Floor, Shrawan Plaza, Opp. SSP Niwas, Lucknow - 226001</p>
              </div>

              <div>
                <div className='flex items-center'>
                  <div className='text-7xl text-white'><PiBuildingsFill /></div>
                  <p className="font-bold py-auto text-white text-xl sm:text-3xl ">JABALPUR RECRUITMENT CENTER :</p>
                </div>
                <p className="text-white py-5 px-2"><span className='font-bold'>Location : </span> 178, Manmohan Nagar, Madhotal, Near New ISBT, Jabalpur MP (482002)</p>
              </div>
            </div>
            <div className='content-center'>
              <Form/>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default contact