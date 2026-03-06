import React from "react";
import Header from "../src/components/Header";
import { Link } from "react-router-dom";
const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center font-[Raveo_Display]">
      <Header />

      {/* Main Section */}
      <main className="flex flex-col items-center text-center px-[10rem] py-[6.625rem] gap-[4.8125rem] w-full max-w-[90rem]">

        {/* Success Icon */}
        <div className="flex items-center justify-center w-[8.125rem] h-[8.125rem] rounded-[62.4375rem] bg-[#A0D8B3]">
          <svg xmlns="http://www.w3.org/2000/svg" width="79" height="57" viewBox="0 0 79 57" fill="none">
  <path d="M77.1108 1.64795C79.3081 3.84521 79.3081 7.41357 77.1108 9.61084L32.1108 54.6108C29.9136 56.8081 26.3452 56.8081 24.1479 54.6108L1.64795 32.1108C-0.549316 29.9136 -0.549316 26.3452 1.64795 24.1479C3.84521 21.9507 7.41357 21.9507 9.61084 24.1479L28.1382 42.6577L69.1655 1.64795C71.3628 -0.549316 74.9312 -0.549316 77.1284 1.64795H77.1108Z" fill="white"/>
</svg>
            
        </div>

        {/* Heading + Paragraph */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[3rem] font-semibold leading-[3.75rem] text-black">
            Your information has been received.
          </h1>

          <p className="text-[1.75rem] leading-[2.1875rem] text-[#333] max-w-[60rem]">
            Our counsellor will contact you shortly to guide you about TEF preparation for Canada PR.
          </p>
        </div>

        {/* Blue Container */}
        <div className="flex flex-col items-center gap-12 w-[70rem] p-12 rounded-[2rem] bg-[#E4F1FE]">

          {/* Container Text */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[1.75rem] font-semibold leading-[2.1875rem] text-black">
              Do not wait for the call. <br />
              Start with a ₹99 TEF Demo Session.
            </h2>

            <p className="text-[1rem] leading-[1.5rem] text-[#333] max-w-[40rem]">
              This short live session helps you understand exactly how to prepare for TEF
              and what score you need for Canada PR before enrolling in the full course.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-16">

            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#0D7CC1] text-[1.375rem] font-semibold leading-[1.71875rem]">
                500+ students
              </h3>
              <p className="text-[#464646] text-[1rem] leading-[1.5rem]">
                enrolled last month
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#0D7CC1] text-[1.375rem] font-semibold leading-[1.71875rem]">
                Rated 4.9
              </h3>
              <p className="text-[#464646] text-[1rem] leading-[1.5rem]">
                by learners
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#0D7CC1] text-[1.375rem] font-semibold leading-[1.71875rem]">
                Save up to 50%
              </h3>
              <p className="text-[#464646] text-[1rem] leading-[1.5rem]">
                on course fees
              </p>
            </div>

          </div>

          {/* Payment Button */}
          <a
            href="https://rzp.io/rzp/tef-india"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-[0.875rem] rounded-[3.875rem] bg-[#6346FA] text-white text-[1rem] font-semibold leading-[1.5rem]"
          >
            Book Your ₹99 Demo Session
          </a>

          <Link
  to="/"
  className="text-[#808080] text-[0.875rem] leading-[1.3125rem] underline cursor-pointer"
>
  No thanks, I will wait for the counsellor
</Link>

        </div>
      </main>
    </div>
  );
};

export default ThankYouPage;