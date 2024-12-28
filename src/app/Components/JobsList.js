"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("https://sheetdb.io/api/v1/w4pjk3wv2o7ir");
        const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=MXCiipgvqwJv267buOtBme4B4h-U3sovgKMz6jvB7GaYWnpdKCt3V_yjrKvwvIakOHTiaooRhi3mcoOow9twlhSPjjAM5KG0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDjMLHMsRbHMccsXWN_GE8PhRuDmrLnFG4P08sUIeFxwsT8LsTgpF5hiaeIPxJ1YISpOUex2kBH3kwRWRAMIQhtFyJ8N2EaNYw&lib=MU3J6t62w4hVQRZBQhXaTMWqCSSRPIxnK");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const cachedJobs = sessionStorage.getItem('jobs');
  //       if (cachedJobs) {
  //         setJobs(JSON.parse(cachedJobs));
  //         setLoading(false);
  //         return;
  //       }
        
  //       const response = await fetch("https://script.googleusercontent.com/macros/echo?...");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
        
  //       const data = await response.json();
  //       sessionStorage.setItem('jobs', JSON.stringify(data));
  //       setJobs(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  // fetchData();

  if (loading) {
    return <div className="flex flex-col pt-52 items-center h-screen">
            <div className="content-center w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            <p className="text-white">Loading job openings...</p>
    </div>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">Error: {error}</p>;
  }



  return (
    <div className="h-screen content-center container mx-auto p-4">
      <div className="grid sm:grid-cols-3 gap-10">
      {jobs.map((job, index) => {
              
            const templateMessage = `Name: [Your Name]%0AEmail: [Your Email]%0AExperience: [Your Experience]%0AJob Title: ${job["Job Title"]}`;
            const emailRecipient = job["Email"];
            const emailSubject = `Job Application`;
            const emailBody = `Name: [Your Name]\nEmail: [Your Email]\nExperience: [Your Experience]\nJob Title: ${job["Job Title"]}`;
              // const templateMessage = `Name: [Your Name]%0AEmail: [Your Email]%0AExperience: [Your Experience]%0AJob Title: ${job["Job Title"]}`;
        
            return (
              <div key={index} className="grid-grow bg-white drop-shadow hover:shadow-md rounded-lg ease-in-out duration-300 bg-whitesmoke">
                <h1 className="py-5 px-2 font-semibold text-xl text-center">{job["Title"]}</h1>
                <p className="px-5 font-semibold flex"><div className="px-1 py-1"><MdLocationOn /></div>Location : {job["Location"]}</p>
                <p className="px-5 font-semibold flex"><div className="px-1 py-1"><IoMdPerson /></div>Experience : {job["Experience"]}</p>
                <p className="px-5 font-semibold flex"><div className="px-1 py-1"><FaRupeeSign /></div>Salary : {job["Salary"]}</p>
                <div className="flex flex-row my-5">
                <Link
                    href={`https://wa.me/${job["Whatsapp"]}?text=${templateMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-center bg-green-500 text-white px-7 py-2 rounded-full hover:bg-green-600 transition duration-300 mx-auto my-auto"
                >
                  <div className="py-1 px-1"><FaWhatsapp /></div>
                  WhatsApp
                </Link>
                <Link
                  href={`mailto:${emailRecipient}?subject=${encodeURIComponent(
                    emailSubject
                  )}&body=${encodeURIComponent(emailBody)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-center bg-red-700 text-white px-7 py-2 rounded-full hover:bg-red-900 transition duration-300 mx-auto my-auto"
                >
                  <div className="py-1 px-1"><MdEmail /></div>
                  Email
                </Link>
                </div>
              </div>
            )})}
      </div>
    </div>
  );
};

export default JobList;
