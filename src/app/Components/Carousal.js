"use client"
import { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      "Title" : "Finance",
      "Description" : "Offering finance specialists to maximize investment opportunities.",
  },
  {
      "Title" : "BPO",
      "Description" : "Providing efficient resources for streamlined customer support and service.",
  },
  {
      "Title" : "IT & Technology",
      "Description" : "Delivering talented tech professionals for cutting-edge solutions.",
  },
  {
      "Title" : "Hospitality",
      "Description" : "Supplying committed staff to ensure exceptional guest experiences.",
  },
  {
      "Title" : "Banking",
      "Description" : "Offers financial services including deposits, loans, and money management to individuals and businesses.",
  },
  {
      "Title" : "Edutech",
      "Description" : "Equipping businesses with educators and developers for impactful learning solutions.",
  },
  {
      "Title" : "Fintech",
      "Description" : "Enabling access to innovators driving advancements in financial technology.",
  },
  {
      "Title" : "Retail",
      "Description" : "Bringing in marketing and sales experts to elevate customer engagement.",
  },
  {
      "Title" : "FMCG",
      "Description" : "Industry focused on the production and distribution of everyday consumer goods like food, beverages, and personal care products.",
  },
  {
      "Title" : "NBFC",
      "Description" : "Providing financial services like loans and investments without holding a banking license.",
  },
  {
      "Title" : "Telecom",
      "Description" : "Enhancing connectivity with professionals skilled in telecommunications.",
  },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 rounded-md w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <h1 className="font-bold text-center py-24 text-white">{slide.title}</h1>
            <p className="text-white text-center">{slide.desc}</p>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={prevSlide}
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          >
            <h1>{slide.Title}</h1>
            <p>{slide.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
