import React from 'react';

const Footer = () => {
    return (
      <section className='shadow mt-6 '>
        <div className="flex md:justify-between gap-2 text-center items-center py-4 px-2 container mx-auto">
          <p className="text-sm md:text-xl lg:text-2xl">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।{" "}
          </p>
          <p className="text-sm md:text-xl lg:text-2xl">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </p>
        </div>
      </section>
    );
};

export default Footer;