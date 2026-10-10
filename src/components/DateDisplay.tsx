"use client";

const DateDisplay = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return <p className="lg:text-2xl md:text-xl">{date}</p>;
};

export default DateDisplay;
