"use client";

import { useState } from "react";

export default function Home() {
  // Create a live countdown until 31th september 2024, numbers should be updated every second
  const startingDate = new Date("08-14-2024").getTime();
  const endDate = new Date("10-01-2024").getTime();
  const countdown = endDate - new Date().getTime();
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  const [values, setValues] = useState({
    days,
    hours,
    minutes,
    seconds,
  });

  setInterval(() => {
    setValues({
      days: Math.floor(countdown / (1000 * 60 * 60 * 24)),
      hours: Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((countdown % (1000 * 60)) / 1000),
    });
  }, 1000);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 relative">
      <div
        className="absolute left-0 top-0 min-h-screen bg-red-600 -z-10 max-w-[100%]"
        style={{
          // Width should be proportional to the countdown to endDate from startingDate
          width: `${
            ((new Date().getTime() - startingDate) / (endDate - startingDate)) *
            100
          }%`,
        }}
      ></div>
        {/* For each day until target date do a small rectangle 1px width height 64px in white */}
        {Array.from({ length: days }, (_, i) => (
          <div
            key={i}
            className="h-16 w-[1px] bg-white absolute -z-[5] top-0"
            style={{ left: `${(i / days) * 100}%` }}
          ></div>
        ))}
      <div className="flex mt-3">
        <div className="flex flex-col items-center justify-center w-[120px]">
          <span className="text-8xl font-bold">
            {days < 10 ? "0" + days : days}
          </span>
          <span className="text-xl">Days</span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-7xl mx-8">:</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[120px]">
          <span className="text-8xl font-bold">
            {hours < 10 ? "0" + hours : hours}
          </span>
          <span className="text-xl">Hours</span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-7xl mx-8">:</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[120px]">
          <span className="text-8xl font-bold">
            {minutes < 10 ? "0" + minutes : minutes}
          </span>
          <span className="text-xl">Minutes</span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-7xl mx-8">:</p>
        </div>
        <div className="flex flex-col items-center justify-center w-[120px]">
          <span className="text-8xl font-bold">
            {seconds < 10 ? "0" + seconds : seconds}
          </span>
          <span className="text-xl">Seconds</span>
        </div>
      </div>
    </main>
  );
}
