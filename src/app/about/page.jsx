import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <Navbar/>
        <div className="bg-gradient-to-b from-green-800 to-black text-white px-4 sm:px-20 py-10">
          <h1 className="text-xl sm:text-2xl leading-relaxed mt-12">
            <span className="font-bold text-white">KVC CONSULTANTS LTD :</span> headquartered in Lucknow is a leading end-to-end human resource service company in India which provides temporary, permanent, and contract staffing solutions to companies. Started in 2000, the company has clocked a steady growth overcoming stiff competition and challenges to emerge as pioneers in servicing our clients.
          </h1>
          <br />
          <h1 className="text-xl sm:text-2xl leading-relaxed">
            <span className="font-bold text-white">KVC CONSULTANTS LTD :</span> is a brainchild of qualified professionals, each with over 15 years of rich and diversified corporate exposure in fields spanning sales, customer service, project management, financial markets, education, learning & development.
          </h1>
          <br />
          <p className="text-lg leading-relaxed">
            We have a vintage of more than fifteen years in servicing satisfied clients.
            <br />
            Today, KVC CONSULTANTS LTD. operates in the following business lines:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed mt-4 space-y-2 ">
            <li>Corporate Learning & Development</li>
            <li>Employability Enhancement for young managers</li>
            <li>Permanent Staffing</li>
            <li>Contractual Staffing</li>
          </ul>
          <br />
          <p className="text-lg leading-relaxed ">
            It is a journey that over time has seen the company grow from strength to strength and emerge as a top-class service provider to meet the growing business needs.
          </p>
        </div>
      <Footer/>
    </>
  );
};

export default About;
