"use client"
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, color, font }) {
  return (
    <div className="number py-5 text-white">
      <h1 className={color}><CountUp duration={10} className="counter" end={number} /></h1>
      <span className={color}> {title}</span>
    </div>
  );
}
