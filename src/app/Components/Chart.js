"use client"; // Required in Next.js if using React hooks or browser-only libraries

import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartComponent = () => {
  const chartRef = useRef(null); // Reference for the canvas
  const chartInstanceRef = useRef(null); // Store the Chart.js instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the chart if it already exists (prevents multiple instances)
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar", // Type of chart
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sales",
            data: [50, 60, 70, 180, 190],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Revenue (in $)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Months",
            },
          },
        },
      },
    });

    // Cleanup chart instance on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Run only once on mount

  return (
    <div>
      <h2>Monthly Sales Data</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
