"use client";

import React, { useState } from "react";

type FooterProps = {
  onSubscribe?: (email: string) => void;
  brand?: string;        // primary purple
  brandSoft?: string;    // softer purple (CTA background)
  neutralPrimary?: string;
  neutralSecondary?: string;
  divider?: string;
};

export default function Footer({
  onSubscribe,
  brand = "#984DDD",
  brandSoft = "#D3E373",
  neutralPrimary = "#022850",
  neutralSecondary = "#6B6A70",
  divider = "#E7E6EA",
}: FooterProps) {
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubscribe?.(email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-12 md:py-16">
        {/* Top row: headline + CTA */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <h2
            className="text-[28px] md:text-[40px] font-semibold md:leading-[50px] leading-[35px] md:text-left text-center"
            style={{ color: neutralPrimary, fontFamily: "Raveo Display, sans-serif" }}
          >
            Your Journey to French
            <br /> Fluency Starts Here
          </h2>
          <p className="text-[14px] text-[#022850] leading-[21px] font-normal ">Online French Skool is a part of TLS (The Language Skool) — a <br />global platform helping students master international languages <br />with live, interactive, and personalised online courses.</p>

          <a
            href="/contact_us"
            className="inline-flex md:w-fit w-full justify-center items-center gap-2 rounded-lg px-5 py-3 text-[#38400D] text-[15px] font-semibold"
            style={{ backgroundColor: brandSoft, fontFamily: "Raveo Display, sans-serif" }}
          >
            Book Free Trial Class Today
            <span aria-hidden>↗</span>
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full" style={{ background: divider }} />

        {/* Middle: logo + newsletter + nav */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Left block (logo + newsletter) */}
          <div className="md:col-span-7 max-w-xl">
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="58" viewBox="0 0 90 58" fill="none">
  <path d="M51.5246 27.9916H57.4913V29.556H53.2198V31.9768H56.9896V33.5405H53.2198V37.5124H51.5246V27.9916Z" fill="#022850"/>
  <path d="M58.0797 30.7117H59.6253V37.5117H58.0797V30.7117ZM61.9305 30.6297V32.0448C60.5407 31.9109 59.5624 32.6146 59.6253 34.0984H59.2047C59.2228 31.9915 59.8077 30.451 61.9298 30.6297H61.9305Z" fill="#022850"/>
  <path d="M65.5872 37.7031C62.3114 37.8264 60.8384 33.762 63.0038 31.5212C65.4572 29.237 69.4206 31.0383 68.7868 34.5336H63.268V33.3772H67.5115L67.3082 33.5678C67.2977 31.4526 64.2015 31.2619 63.6334 33.1732C63.2484 34.2435 63.5894 35.7406 64.7319 36.1786C65.6843 36.5627 66.9015 36.281 67.4165 35.3355L68.5282 36.206C67.8253 37.2068 66.8212 37.7045 65.5858 37.7024L65.5872 37.7031Z" fill="#022850"/>
  <path d="M74.1805 33.6365C74.3028 32.049 72.6684 31.4091 71.6175 32.4261C70.8076 33.1172 71.2953 36.5557 71.1703 37.5124H69.6246V30.7124H71.1703V32.0042H70.9397C71.5846 30.3487 73.8605 30.0347 75.0211 31.2766C76.2251 32.349 75.5683 36.0973 75.7262 37.5124H74.1805V33.6365Z" fill="#022850"/>
  <path d="M76.759 32.6637C77.7058 29.9863 82.073 29.7312 83.1659 32.4121L81.8369 33.1059C80.9327 31.0559 77.9517 31.9376 78.067 34.1124C77.951 36.3125 80.999 37.1795 81.8501 35.0642L83.1785 35.7301C82.5126 37.5285 80.3045 38.1082 78.6295 37.4374C76.7715 36.7597 76.0448 34.4201 76.7583 32.663L76.759 32.6637Z" fill="#022850"/>
  <path d="M88.415 33.6365C88.5366 32.0497 86.9036 31.4084 85.8519 32.4261C85.0421 33.1172 85.5298 36.5557 85.4047 37.5124H83.8591V27.6923H85.4047V32.0034H85.1741C85.8191 30.3487 88.095 30.0333 89.2556 31.2759C90.4589 32.3483 89.802 36.0966 89.96 37.5117H88.4143V33.6358L88.415 33.6365Z" fill="#022850"/>
  <path d="M53.4944 25.3037C50.3059 24.1087 49.5792 19.459 51.9348 17.1355C55.0289 14.0972 60.4988 16.1991 60.3625 20.6995C60.475 24.3498 56.7646 26.655 53.4944 25.3037ZM56.7625 23.8346C60.4631 21.9752 58.3452 15.9482 54.1729 17.5638C52.4616 18.2324 51.89 20.4304 52.498 22.0523C53.0605 23.7652 55.1637 24.5369 56.7625 23.8346Z" fill="#022850"/>
  <path d="M66.0057 21.5834C66.1273 19.9959 64.4936 19.3559 63.4427 20.3729C62.6328 21.0647 63.1205 24.5033 62.9955 25.46H61.4498V18.6586H62.9955V19.951H62.7649C63.4091 18.2955 65.6864 17.9801 66.8463 19.2235C68.0503 20.2944 67.3935 24.0449 67.5514 25.4593H66.0057V21.5827V21.5834Z" fill="#022850"/>
  <path d="M68.6568 25.46V15.6398H70.2025V25.46H68.6568Z" fill="#022850"/>
  <path d="M72.1276 17.5168C70.8495 17.5477 70.8377 15.5291 72.1143 15.5445C73.4266 15.4997 73.4356 17.547 72.1276 17.5168ZM71.3547 25.46H72.9004V18.6586H71.3547V25.46Z" fill="#022850"/>
  <path d="M78.6093 21.5834C78.7309 19.9959 77.0972 19.3559 76.0462 20.3729C75.2364 21.0647 75.7241 24.5033 75.599 25.46H74.0534V18.6586H75.599V19.951H75.3684C76.0127 18.2955 78.2899 17.9801 79.4499 19.2235C80.6539 20.2944 79.997 24.0449 80.1549 25.4593H78.6093V21.5827V21.5834Z" fill="#022850"/>
  <path d="M84.4929 25.6499C81.2164 25.774 79.7441 21.7088 81.9095 19.4681C84.3636 17.1839 88.3249 18.9845 87.6932 22.4805H82.1744V21.3247H86.4186L86.2153 21.5147C86.2041 19.3994 83.1079 19.2088 82.5405 21.1208C82.1548 22.191 82.4972 23.6874 83.639 24.1262C84.5921 24.5103 85.8086 24.2285 86.3243 23.283L87.4353 24.1528C86.7324 25.1537 85.7283 25.6513 84.4935 25.6492L84.4929 25.6499Z" fill="#022850"/>
  <path d="M52.2632 49.1843C51.5896 48.7855 51.0718 48.2009 50.7105 47.4307L52.1206 46.6141C53.2617 49.4415 58.1251 48.1463 56.2566 46.1452C55.2343 45.4556 53.7033 45.4226 52.5888 44.8465C51.2947 44.3271 50.8035 42.7509 51.4023 41.4935C51.9648 40.297 53.3085 39.8246 54.6019 39.8274C56.2314 39.8246 57.4843 40.501 58.2495 41.9217L56.8659 42.7375C55.787 40.2529 51.4715 41.4907 53.2456 43.2751C54.6515 44.1351 56.8708 43.9234 57.9511 45.3834C58.4633 46.0009 58.4675 47.294 58.1006 48.0355C57.1279 50.0555 53.9647 50.1788 52.2632 49.1843Z" fill="#022850"/>
  <path d="M60.7748 49.5649H59.2291V39.7447H60.7748V49.5649ZM65.358 42.7649L60.5847 47.7559V45.8656L63.4727 42.7649H65.358ZM61.5609 46.2602L62.5503 45.2803L65.439 49.5649H63.7438L61.5609 46.2602Z" fill="#022850"/>
  <path d="M68.8797 49.7562C66.2426 49.8431 64.6026 47.0886 65.5648 44.7302C66.592 41.8789 71.1556 41.8754 72.1821 44.7302C73.1499 47.0557 71.4924 49.8585 68.8804 49.7555L68.8797 49.7562ZM68.8797 48.3278C71.5364 48.3425 71.5287 43.9683 68.8664 44.0026C66.2258 43.9795 66.2356 48.365 68.8797 48.3278Z" fill="#022850"/>
  <path d="M76.5242 49.7562C73.8871 49.8431 72.2471 47.0886 73.2093 44.7302C74.2364 41.8789 78.8 41.8754 79.8265 44.7302C80.7943 47.0557 79.1368 49.8585 76.5249 49.7555L76.5242 49.7562ZM76.5242 48.3278C79.1809 48.3425 79.1732 43.9683 76.5109 44.0026C73.8703 43.9795 73.8801 48.365 76.5242 48.3278Z" fill="#022850"/>
  <path d="M80.9096 49.5649V39.7447H82.4553V49.5649H80.9096Z" fill="#022850"/>
  <path d="M41.2626 49.7786C41.2025 49.7913 41.1305 49.7913 41.0704 49.7913H34.4371C33.1199 49.7913 32.0515 50.8825 32.0515 52.2282V57.1877C32.0515 57.8669 31.2829 58.2454 30.763 57.8213L21.568 50.3225C21.1452 49.9777 20.6205 49.7906 20.0803 49.7906H3.35545C1.50234 49.7906 0 48.2556 0 46.3618V19.5599C0 17.6661 1.50234 16.1312 3.35545 16.1312H8.89943V38.6072C8.89943 40.2417 9.98181 41.6673 11.5331 42.0724L39.4947 49.4212L40.445 49.6672C40.7217 49.7408 40.9984 49.7779 41.2626 49.7779V49.7786Z" fill="#FFEE70"/>
  <path d="M39.4947 49.4226L11.5331 42.0738C9.98181 41.668 8.89943 40.2431 8.89943 38.6086V10.8479C8.89943 8.50061 11.0642 6.79254 13.289 7.37008L18.8931 8.84474V31.8864C18.8931 33.0905 19.4465 34.2337 20.3962 34.9584L38.833 49.0168C39.0496 49.1766 39.2662 49.3119 39.4947 49.4226Z" fill="#38B9F2"/>
  <path d="M44.8346 17.9016V46.2027C44.8346 46.3254 44.8346 46.4361 44.8228 46.5469C44.7389 48.2794 43.3798 49.6805 41.6839 49.7786C41.5637 49.7786 41.4554 49.7913 41.3352 49.7913C41.3115 49.7913 41.287 49.7913 41.2633 49.7786C40.9984 49.7786 40.7217 49.7415 40.4457 49.6679L39.4954 49.4219C39.2669 49.3111 39.0503 49.1759 38.8337 49.0161L20.3969 34.9577C19.4465 34.2323 18.8938 33.0898 18.8938 31.8857V3.84321C18.8938 0.685015 22.4058 -1.12117 24.8829 0.771224L43.3197 14.8296C44.27 15.5543 44.8353 16.6975 44.8353 17.9016H44.8346Z" fill="#4A3CF3"/>
</svg>

            {/* Copy */}
            <p
              className="mt-6 text-[15px] leading-6"
              style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
            >
              Subscribe to stay up to date with the latest updates and feature releases.
            </p>

            {/* Newsletter input */}
            <form onSubmit={submit} className="mt-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., username@email.com"
                  className="w-full rounded-2xl border bg-white px-4 py-4 text-[15px] outline-none transition placeholder:opacity-50"
                  style={{
                    borderColor: divider,
                    fontFamily: "Raveo Display, sans-serif",
                    color: neutralPrimary,
                  }}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 rounded-lg px-4 py-2 text-white font-semibold"
                  style={{
                    background: "#022850",
                    fontFamily: "Raveo Display, sans-serif",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Right navigation columns */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <nav>
              <div
                className="mb-4 text-[16px] font-semibold"
                style={{ color: neutralPrimary, fontFamily: "Raveo Display, sans-serif" }}
              >
                Courses
              </div>
              <ul className="space-y-4">
                {["TEF Canada PR Preparation", "French Beginner Course", "French Intermediate Course"].map((t) => (
                  <li key={t}>
                    <a
                      href="/"
                      className="text-[15px] leading-6 hover:underline"
                      style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <div
                className="mb-4 text-[16px] font-semibold"
                style={{ color: neutralPrimary, fontFamily: "Raveo Display, sans-serif" }}
              >
                Legal
              </div>
              <ul className="space-y-4">
                  <li>
                    <a
                      href="/privacy_policy"
                      className="text-[15px] leading-6 hover:underline"
                      style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                                    <li>
                    <a
                      href="/terms_and_conditions"
                      className="text-[15px] leading-6 hover:underline"
                      style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
                    >
                      Terms of Use
                    </a>
                  </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-10 h-px w-full" style={{ background: divider }} />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <span
            className="text-[15px]"
            style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
          >
            ©Copyright 2025
          </span>
          <span
            className="text-[15px]"
            style={{ color: neutralSecondary, fontFamily: "Raveo Display, sans-serif" }}
          >
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
