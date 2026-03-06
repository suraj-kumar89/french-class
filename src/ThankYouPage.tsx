import React, { useState } from "react";
import Header from "../src/components/Header";
import { Link } from "react-router-dom";

const ThankYouPage = () => {

  const [showPersuasion, setShowPersuasion] = useState(false);

  return (
    <div className="flex flex-col min-h-screen items-center font-[Raveo_Display]">

      <Header />

      <main className="flex flex-col items-center justify-center text-center w-full max-w-[1200px] px-6 lg:px-8 py-3 gap-3">

        {/* Success Icon */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#A0D8B3]">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="36" viewBox="0 0 79 57" fill="none">
            <path d="M77.1108 1.64795C79.3081 3.84521 79.3081 7.41357 77.1108 9.61084L32.1108 54.6108C29.9136 56.8081 26.3452 56.8081 24.1479 54.6108L1.64795 32.1108C-0.549316 29.9136 -0.549316 26.3452 1.64795 24.1479C3.84521 21.9507 7.41357 21.9507 9.61084 24.1479L28.1382 42.6577L69.1655 1.64795C71.3628 -0.549316 74.9312 -0.549316 77.1284 1.64795H77.1108Z" fill="white"/>
          </svg>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-3 max-w-[800px]">
          <h1 className="text-2xl md:text-4xl lg:text-[2.8rem] font-semibold">
            Your information has been received.
          </h1>

          <p className="text-base md:text-lg text-[#333]">
            Our counsellor will contact you shortly to guide you about the French course options.
          </p>
        </div>

        {/* Blue Container */}
        <div className="flex flex-col items-center gap-3 w-full max-w-[900px] p-6 md:p-8 rounded-[2rem] bg-[#E4F1FE]">

          {/* Headline */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-semibold">
              While you wait, experience a live French demo session for just ₹99
            </h2>

            <p className="text-sm md:text-base text-[#333] max-w-[600px]">
              See how the classes work, interact with the trainer, and understand how quickly you can start speaking French.
            </p>
          </div>

         <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">

            <div>
              <h3 className="text-[#0D7CC1] text-lg font-semibold">
                500+ students
              </h3>
              <p className="text-[#464646] text-sm">
                enrolled last month
              </p>
            </div>

            <div>
              <h3 className="text-[#0D7CC1] text-lg font-semibold">
                Rated 4.9
              </h3>
              <p className="text-[#464646] text-sm">
                by learners
              </p>
            </div>

            <div>
              <h3 className="text-[#0D7CC1] text-lg font-semibold">
                Unlock up to 50% 

              </h3>
              <p className="text-[#464646] text-sm">
                course savings
              </p>
            </div>

          </div>

          {/* Demo Benefits */}
          <div className="text-left text-sm md:text-base text-[#333] max-w-[600px] space-y-2">
            <p>• Experience how our live French classes are conducted</p>
            <p>• Understand the learning roadmap from beginner to advanced</p>
            <p>• Interact with the trainer and ask questions</p>
            <p>• See if the course structure fits your learning goals</p>
          </div>

          {/* Urgency Line */}
          <p className="text-sm text-red-600 font-semibold">
            Limited seats available for this week's demo sessions.
          </p>

          {/* CTA */}
          <a
            href="https://rzp.io/rzp/0iBhgVwy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-[#6346FA] text-white text-sm md:text-base font-semibold hover:opacity-90 transition"
          >
            Book Your ₹99 French Demo Session
          </a>

          {/* Secondary Option */}
          <button
            onClick={() => setShowPersuasion(true)}
            className="text-[#808080] text-sm underline hover:text-black"
          >
            No thanks, I will wait for the counsellor.
          </button>

        </div>

      </main>


      {/* Persuasion Modal */}
      {showPersuasion && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">

          <div className="bg-[#F3EFE2] max-w-[520px] w-full rounded-2xl shadow-xl p-8 text-center">

            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Most students attend the demo before deciding.
            </h2>

            <p className="text-gray-700 mb-6">
              The ₹99 session helps you experience the teaching style,
              understand the course structure, and see how quickly you can start speaking French.
            </p>

            {/* CTA */}
            <a
              href="https://rzp.io/rzp/0iBhgVwy"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white py-3 rounded-lg font-semibold mb-3 hover:opacity-90"
            >
              Join the ₹99 Demo Session
            </a>

            {/* Exit */}
            <Link
              to="/"
              className="block w-full bg-gray-200 py-3 rounded-lg font-medium hover:bg-gray-300"
            >
              Continue without booking
            </Link>

          </div>

        </div>

      )}

    </div>
  );
};

export default ThankYouPage;