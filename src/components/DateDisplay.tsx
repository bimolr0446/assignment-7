"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
  const [date, setDate] = useState('')
  useEffect(() => {
     const currentDate = new Date().toLocaleDateString("bn-BD", {
       dateStyle: "full",
     });
    setDate(currentDate)
  },[])

  return <p className="lg:text-2xl md:text-xl">{date}</p>;
};

export default DateDisplay;
