"use client"
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
      AOS.init({
        duration: 700, // Animation duration in ms
        once: true,    // Whether animation should happen only once
      });
    }, []);

  return (
    <>
      <Navbar/>
        <div className="bg-gradient-to-b from-white to-blue-100 text-white px-4 sm:px-20 py-10 text-black">
          <h1 data-aos="fade-up" className="text-xl sm:text-2xl leading-relaxed mt-12 text-black">
            <span className="font-bold text-black">SS CONSULTANTS LTD :</span> headquartered in Jabalpur is a leading end-to-end human resource service company in India which provides temporary, permanent, and contract staffing solutions to companies. Started in 2000, the company has clocked a steady growth overcoming stiff competition and challenges to emerge as pioneers in servicing our clients.
          </h1>
          <br />
          <h1 data-aos="fade-up" className="text-xl sm:text-2xl leading-relaxed text-black">
            <span className="font-bold text-black">SS CONSULTANTS LTD :</span> is a brainchild of qualified professionals, each with over 15 years of rich and diversified corporate exposure in fields spanning sales, customer service, project management, financial markets, education, learning & development.
          </h1>
          <br />
          <p data-aos="fade-up" className="text-lg leading-relaxed text-black">
            We have a vintage of more than fifteen years in servicing satisfied clients.
            <br />
            Today, SS CONSULTANTS LTD. operates in the following business lines:
          </p>
          <ul data-aos="fade-up" className="list-disc list-inside text-lg leading-relaxed mt-4 space-y-2 text-black">
            <li>Corporate Learning & Development</li>
            <li>Employability Enhancement for young managers</li>
            <li>Permanent Staffing</li>
            <li>Contractual Staffing</li>
          </ul>
          <br />
          <p data-aos="fade-up" className="text-lg leading-relaxed text-black">
            It is a journey that over time has seen the company grow from strength to strength and emerge as a top-class service provider to meet the growing business needs.
          </p>
        </div>
      <Footer/>
    </>
  );
};

export default About;
