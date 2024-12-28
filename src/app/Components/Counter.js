"use client"
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number py-5 text-white">
      <CountUp duration={10} className="counter" end={number} />+
      <span> {title}</span>
    </div>
  );
}
