"use client"
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const slides = [
  {
      "img" : "/Carousal/finance.jpg",
      "Title" : "Finance",
      "Description" : "Offering finance specialists to maximize investment opportunities.",
  },
  {
      "img" : "/Carousal/bpo.jpg",
      "Title" : "BPO",
      "Description" : "Providing efficient resources for streamlined customer support and service.",
  },
  {
      "img" : "/Carousal/IT.jpg",
      "Title" : "IT & Technology",
      "Description" : "Delivering talented tech professionals for cutting-edge solutions.",
  },
  {
    "img" : "/Carousal/hospital.jpg",
      "Title" : "Hospitality",
      "Description" : "Supplying committed staff to ensure exceptional guest experiences.",
  },
  {
    "img" : "/Carousal/Banking.jpg",
      "Title" : "Banking",
      "Description" : "Offers financial services including deposits, loans, and money management to individuals and businesses.",
  },
  {
    "img" : "/Carousal/edutech.jpg",
      "Title" : "Edutech",
      "Description" : "Equipping businesses with educators and developers for impactful learning solutions.",
  },
  {
    "img" : "/Carousal/fintech.jpg",
      "Title" : "Fintech",
      "Description" : "Enabling access to innovators driving advancements in financial technology.",
  },
  {
    "img" : "/Carousal/retail.jpg",
      "Title" : "Retail",
      "Description" : "Bringing in marketing and sales experts to elevate customer engagement.",
  },
  {
    "img" : "/Carousal/fmcg.jpg",
      "Title" : "FMCG",
      "Description" : "Industry focused on the production and distribution of everyday consumer goods like food, beverages, and personal care products.",
  },
  {
    "img" : "/Carousal/nbfc.jpg",
      "Title" : "NBFC",
      "Description" : "Providing financial services like loans and investments without holding a banking license.",
  },
  {
      "img" : "/Carousal/telecom.jpg",
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
    <div className="relative h-96 rounded-md overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}

      >
        {slides.map((slide, index) => (
          <>
          <div
            key={index}
            className="h-full w-full flex-shrink-0 rounded-[15px] px-5 content-center"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "1000px", // Ensures the entire image fits inside the container
              backgroundPosition: "center", // Centers the image in the container
              backgroundRepeat: "no-repeat", 
              filter: "brightness(1)",// Prevents tiling of the image
            }}
          >
            {/* <Image src={slide.img} height={full} width={full}/> */}
            <h1 className="font-bold text-center sm:text-5xl text-white drop-shadow py-5">{slide.Title}</h1>
            <p className="text-white text-center text-wrap">{slide.Description}</p>
          </div>
          </>
        ))}
      </div>

        {/* Previous Button */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2  text-black px-5 py-5 rounded-full hover:bg-black hover:text-white hover:ring-0 focus:outline-none ring-1 ring-white duration-500" 
          onClick={prevSlide}
        >
          <h1 className="text-white"><FaArrowLeft/></h1>
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2  text-black px-5 py-5 rounded-full hover:bg-black hover:text-white hover:ring-0 focus:outline-none ring-1 ring-white duration-500"
          onClick={nextSlide}
        >
          <h1 className="text-white"><FaArrowRight /></h1>
        </button>
    </div>
  );
};

export default Carousel;
