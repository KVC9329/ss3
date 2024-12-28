"use client"
import Link from "next/link";
import Example from "./Components/Accordian";
import Comapnies from "./Components/Companies";
import "./globals.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { SiSparkpost } from "react-icons/si";
import { MdOutlinePerson } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in ms
      once: true,    // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Navbar/>
        <div className="grid items-center font-[family-name:var(--font-geist-sans)]">
        <div className="h-screen content-center justify-items-center bg-[url('/back3.jpg')] sm:m-10 sm:mt-24 sm:pt-10 rounded-[10px]">
            <h1 data-aos="fade-up" className="sm:text-5xl text-3xl py-5 text-center font-semibold text-white">
              We help you to grow your, <span className="sm:text-6xl text-4xl py-5 text-center font-bold underline bg-gradient-to-r from-[#fc4a1a] to-[#E100FF] bg-clip-text text-transparent">Workforce</span>
            </h1>
            <p data-aos="fade-up" className="text-center sm:w-3/4 text-white">At SS Consultants, we deliver measurable results: 85% faster hiring for urgent positions compared to traditional methods
            Up to 92% reduction in opportunity costs due to delayed internal hiring
            95% accuracy in matching candidates to job profiles, using AI-driven technology
            60% lower cost-per-hire through streamlined processes and automation
            </p>
            <div data-aos="fade-up">
              <button className="bg-black text-white px-5 py-2 rounded-full my-12 hover:bg-[#fc4a1a] to-[#E100FF] mx-2 duration-500">Contact us <span className="pb-5">&rarr;</span></button>
              <button className="bg-transparent text-white ring-2 ring-white px-5 py-2 rounded-full my-12 hover:bg-white hover:text-black duration-500"> Explore </button>
            </div>
          </div>
          
          <div className="h-screen content-center justify-items-center bg-gradient-to-b from-white to-blue-100">
            <h1 data-aos="fade-up" className="sm:text-5xl text-3xl py-5 text-center font-semibold">Our Hiring partners</h1>
            <div data-aos="fade-up" className="mx-2">
              <Comapnies/>
            </div>
          </div>

          <div className="h-full my-12 py-12 grid sm:grid-cols-2 bg-black">
          <div>
              <h1 data-aos="fade-up" className="sm:text-5xl text-3xl py-5 text-center font-semibold mb-12 text-white"> Why to Choose, <span className="sm:text-5xl text-4xl py-5 text-center font-semibold underline bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">SS Consultants</span></h1>
              <h1 data-aos="fade-up" className="text-center text-xl text-white py-5"><span className="text-7xl text-white font-bold">80% </span>Faster recruitment</h1>
              <p data-aos="fade-up" className="text-center text-white px-5"><span className="font-bold">AI-Driven Recruitment for Faster, Smarter  Hiring   At SS Consultants, </span>
                <br/>  we use cutting-edge AI technology to transform the way we recruit, delivering faster, more accurate results that save you time and resources.
              </p>
              <p data-aos="fade-up" className="text-center text-white py-5"><span className="font-bold">Expertise, </span>
                <br/>  Experienced recruiters in diverse sectors
              </p>
              <p data-aos="fade-up" className="text-center text-white py-5"><span className="font-bold">Speed, </span>
                <br/>  Urgent positions filled in record time.
              </p>
              <p data-aos="fade-up" className="text-center text-white py-5"><span className="font-bold">Global Reach </span>
                <br/>  Hiring expertise across various geographies and sectors
              </p>        
            </div>
            <div className="h-full grid grid-cols-2 gap-5 mx-12">
              <div className="bg-slate-100 gradient-hover-box rounded-lg drop-shadow shadow-md py-12 px-5">
                <h1 className="text-7xl text-orange-500 pt-12"><SiSparkpost /></h1>
                <h1 className="text-start pl-3 text-2xl font-semibold">Speed</h1>
                <p className="text-start pl-3 text-gray-700 text-wrap"> Urgent positions filled in record time.</p>
              </div>
              <div className="bg-slate-100 gradient-hover-box rounded-lg drop-shadow shadow-md py-12 px-5">
                <h1 className="text-7xl text-green-500 pt-12"><MdOutlinePerson /></h1>
                <h1 className="text-start pl-3 text-2xl font-semibold">Expertise</h1>
                <p className="text-start pl-3 text-gray-700 text-wrap">Experienced recruiters in diverse sectors</p>
              </div>
              <div className="bg-slate-100 gradient-hover-box rounded-lg drop-shadow shadow-md py-12 px-5">
                <h1 className="text-7xl text-red-500 pl-3"><GiProcessor /></h1>
                <h1 className="text-start pl-3 text-2xl font-semibold">AI-Driven</h1>
                <p className="text-start pl-3 text-gray-700 text-wrap">Automated processes for efficiency</p>
              </div>
              <div className="bg-slate-100 gradient-hover-box rounded-lg drop-shadow shadow-md py-12 px-5">
                <h1 className="text-7xl text-black pl-3 content-center"><CiGlobe /></h1>
                <h1 className="pl-3 text-2xl text-start font-semibold">Global Reach</h1>
                <p className="text-start pl-3 text-gray-700 text-wrap">Hiring expertise across various geographies and sectors</p>
              </div>
            </div>
          </div>  
          
            <button class="bg-gradient-to-r from-indigo-800 to-pink-800 text-white py-1 w-screen 500"></button>
        </div>
      <Footer/>
    </>
  );
}
