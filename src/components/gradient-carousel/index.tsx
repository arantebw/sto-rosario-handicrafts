"use client";

import { useState, useEffect } from "react";

const gradients = [
  "bg-gradient-to-bl from-red-100 to-orange-600",
  "bg-gradient-to-bl from-orange-100 to-yellow-600",
  "bg-gradient-to-bl from-yellow-100 to-blue-600",
  "bg-gradient-to-bl from-blue-100 to-indigo-600",
];

const GradientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-400 flex items-center justify-center">
      <div
        className={`h-96 w-full ${gradients[currentIndex]} transition-all duration-1000`}
      >
        <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
          Gradient {currentIndex + 1}
        </div>
      </div>
    </div>
  );
};

export default GradientCarousel;
