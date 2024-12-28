"use client"

import { useState } from "react";

const items = [
  {
    title: "Is This Any Fake Consultancy?",
    content:
      "KVC Consulatnsts Ltd is a trustworthy company trusted by major MNCs.",
  },
  {
    title: "Is there any placement charges?",
    content:
      "No, there is not any kind of placement charges.",
  },
  {
    title: "Is this a new company?",
    content: "No, KVC Consultants ltd is a realiable company. Placed over 10,000 candidates and having 10+ years of experience",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-200"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;