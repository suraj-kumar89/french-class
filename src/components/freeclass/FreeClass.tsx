'use client';

import React from 'react';
import useFreeClass from './useFreeClass';

const type = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2:
    "md:text-[40px] text-[28px] leading-[35px] md:leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  subtitle:
    "text-[20px] leading-[30px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  cta:
    "text-[16px] leading-[24px] font-[600] [font-family:'Raveo_Display',sans-serif]",
};

function Mesh() {
  // light “grid” that fades to the right edge of the purple panel
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="376" height="382" viewBox="0 0 376 382" fill="none">
  <path opacity="0.24" d="M0.499997 318.4L0.5 381L63 381M0.499997 318.4L63 318.4M0.499997 318.4L0.499995 255.8M63 318.4L63 381M63 318.4L63 255.8M63 318.4L125.5 318.4M63 381L125.5 381M0.499995 255.8L63 255.8M0.499995 255.8L0.499992 193.2M63 255.8L63 193.2M63 255.8L125.5 255.8M0.499992 193.2L63 193.2M0.499992 193.2L0.499989 130.6M63 193.2L63 130.6M63 193.2L125.5 193.2M0.499989 130.6L63 130.6M0.499989 130.6L0.499986 68M63 130.6L63 68M63 130.6L125.5 130.6M0.499986 68L63 68M0.499986 68L0.499984 5.39999M63 68L63 5.39998M63 68L125.5 68M0.499984 5.39999L63 5.39998M0.499984 5.39999L0.499981 -57.2M63 5.39998L63 -57.2M63 5.39998L125.5 5.39998M0.499981 -57.2L63 -57.2M0.499981 -57.2L0.499978 -119.8M63 -57.2L63 -119.8M63 -57.2L125.5 -57.2M0.499978 -119.8L63 -119.8M0.499978 -119.8L0.499975 -182.4M63 -119.8L63 -182.4M63 -119.8L125.5 -119.8M0.499975 -182.4L63 -182.4M0.499975 -182.4L0.499973 -245L63 -245M63 -182.4L63 -245M63 -182.4L125.5 -182.4M63 -245L125.5 -245M125.5 318.4L125.5 381M125.5 318.4L125.5 255.8M125.5 318.4L188 318.4M125.5 381L188 381M125.5 255.8L125.5 193.2M125.5 255.8L188 255.8M125.5 193.2L125.5 130.6M125.5 193.2L188 193.2M125.5 130.6L125.5 68M125.5 130.6L188 130.6M125.5 68L125.5 5.39998M125.5 68L188 68M125.5 5.39998L125.5 -57.2M125.5 5.39998L188 5.39998M125.5 -57.2L125.5 -119.8M125.5 -57.2L188 -57.2M125.5 -119.8L125.5 -182.4M125.5 -119.8L188 -119.8M125.5 -182.4L125.5 -245M125.5 -182.4L188 -182.4M125.5 -245L188 -245M188 318.4L188 381M188 318.4L188 255.8M188 318.4L250.5 318.4M188 381L250.5 381M188 255.8L188 193.2M188 255.8L250.5 255.8M188 193.2L188 130.6M188 193.2L250.5 193.2M188 130.6L188 68M188 130.6L250.5 130.6M188 68L188 5.39998M188 68L250.5 68M188 5.39998L188 -57.2M188 5.39998L250.5 5.39998M188 -57.2L188 -119.8M188 -57.2L250.5 -57.2M188 -119.8L188 -182.4M188 -119.8L250.5 -119.8M188 -182.4L188 -245M188 -182.4L250.5 -182.4M188 -245L250.5 -245M250.5 318.4L250.5 381M250.5 318.4L250.5 255.8M250.5 318.4L313 318.4M250.5 381L313 381M250.5 255.8L250.5 193.2M250.5 255.8L313 255.8M250.5 193.2L250.5 130.6M250.5 193.2L313 193.2M250.5 130.6L250.5 68M250.5 130.6L313 130.6M250.5 68L250.5 5.39998M250.5 68L313 68M250.5 5.39998L250.5 -57.2M250.5 5.39998L313 5.39997M250.5 -57.2L250.5 -119.8M250.5 -57.2L313 -57.2M250.5 -119.8L250.5 -182.4M250.5 -119.8L313 -119.8M250.5 -182.4L250.5 -245M250.5 -182.4L313 -182.4M250.5 -245L313 -245M313 318.4L313 381M313 318.4L313 255.8M313 318.4L375.5 318.4M313 381L375.5 381L375.5 318.4M313 255.8L313 193.2M313 255.8L375.5 255.8M313 193.2L313 130.6M313 193.2L375.5 193.2M313 130.6L313 68M313 130.6L375.5 130.6M313 68L313 5.39997M313 68L375.5 68M313 5.39997L313 -57.2M313 5.39997L375.5 5.39997M313 -57.2L313 -119.8M313 -57.2L375.5 -57.2M313 -119.8L313 -182.4M313 -119.8L375.5 -119.8M313 -182.4L313 -245M313 -182.4L375.5 -182.4M313 -245L375.5 -245L375.5 -182.4M375.5 318.4L375.5 255.8M375.5 255.8L375.5 193.2M375.5 193.2L375.5 130.6M375.5 130.6L375.5 68M375.5 68L375.5 5.39997M375.5 5.39997L375.5 -57.2M375.5 -57.2L375.5 -119.8M375.5 -119.8L375.5 -182.4" stroke="url(#paint0_radial_847_5576)"/>
  <defs>
    <radialGradient id="paint0_radial_847_5576" cx="0" cy="0" r="1" gradientTransform="matrix(134.375 -144.763 144.882 134.609 188 68)" gradientUnits="userSpaceOnUse">
      <stop stop-opacity="0.42"/>
      <stop offset="1" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
  );
}

export default function FreeClass() {
  const { UI, content } = useFreeClass();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1600px] px-6 md:px-[120px] py-16 md:py-24">
        {/* Card */}
        <div className="grid items-stretch gap-0 rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:grid-cols-2">
          {/* Left: purple panel */}
          <div
            className="relative flex flex-col justify-center p-6 md:p-10"
            style={{ backgroundColor: UI.panelBg }}
          >
            {/* Badge */}
            <div
              className={`inline-flex w-fit items-center gap-[6px] rounded-[36px] border px-3 py-1 ${type.caption}`}
              style={{
                color: UI.badgeText,
                borderColor: UI.badgeBorder,
                background: UI.badgeBg,
              }}
            >
              {content.badge}
            </div>

            {/* Title */}
            <h2 className={`mt-4 ${type.h2}`} style={{ color: UI.title }}>
              {content.titleLine1}
              <br/>
              {content.titleLine2}
            </h2>

            {/* Subtitle */}
            <p className={`mt-4 max-w-[34rem] ${type.subtitle}`} style={{ color: UI.subtitle }}>
              {content.subtitle}
            </p>

            {/* CTA */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => (window.location.href = "/contact_us")}
                className={`inline-flex md:w-fit w-full text-center justify-center items-center gap-1 rounded-[8px] px-4 py-3 ${type.cta}`}
                style={{ background: UI.ctaBg, color: UI.ctaText }}
              >
                {content.cta}
              </button>
            </div>
            <div className="absolute -right-36 top-0">
              <Mesh />
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[320px] md:h-auto">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="h-full w-full object-cover"
              style={{ flex: '1 0 0', alignSelf: 'stretch' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
