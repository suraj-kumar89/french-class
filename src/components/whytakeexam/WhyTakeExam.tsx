'use client';

import React from 'react';
import useWhyTakeExam from './useWhyTakeExam';

/** Typography — identical to LearnMode title tokens */
const type = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h1:
    "md:text-[40px] text-[28px] leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#022850]",
  item:
    "text-[16px] leading-[24px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  itemBold:
    "text-[16px] leading-[24px] font-[600] [font-family:'Raveo_Display',sans-serif]",
};

/** Circular success icon (green ring + check) */
const RingCheck: React.FC<{ color?: string }> = ({ color = '#4A3CF3' }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.6" />
    <path
      d="M6.3 10.1l2.3 2.3L13.7 7.4"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhyTakeExam: React.FC = () => {
  const { UI, image, cta } = useWhyTakeExam();

  return (
    <section className="w-full">
      {/* Scale/1600, side padding 120, block padding ~64 */}
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-16 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[568px_minmax(0,1fr)] md:gap-16">
          {/* RIGHT: Card-like stack */}
          <div className="w-full rounded-[16px]">
            {/* Caption pill */}
            <div
              className={`inline-flex items-center gap-[6px] rounded-[36px] border px-3 py-1 ${type.caption}`}
              style={{
                background: UI.captionBg,
                borderColor: UI.captionBorder,
                color: UI.tertiary,
              }}
            >
              Benefits of Learning French Online
            </div>

            {/* Heading (same as LearnMode) */}
            <h1 className={`my-4 ${type.h1}`}>Why Learn French Online?</h1>
            <p className='text-[#4A749B] text-[18px] font-semibold leading-[27px] '>Build a global skill that opens doors across careers, education, travel, and immigration.</p>

            {/* Points */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <RingCheck color={UI.success} />
                </span>
                <p className={`${type.item}`} style={{ color: UI.secondary }}>
                  <span className="font-semibold">
                    Learn through live online classes with flexibility
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <RingCheck color={UI.success} />
                </span>
                <p className={`${type.item}`} style={{ color: UI.secondary }}>
                  <span className="font-semibold">
                    Build a lifelong language skill with real value
                  </span>
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <RingCheck color={UI.success} />
                </span>
                <p className={`type.item whitespace-pre-line`} style={{ color: UI.secondary }}>
                  <span className='font-semibold'>Unlock global career and study opportunities
                  </span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <RingCheck color={UI.success} />
                </span>
                <p className={`type.item whitespace-pre-line`} style={{ color: UI.secondary }}>
                  <span className='font-semibold'> Prepare effectively for DELF, TEF and TCF
                  </span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <RingCheck color={UI.success} />
                </span>
                <p className={`type.item whitespace-pre-line`} style={{ color: UI.secondary }}>
                  <span className='font-semibold'>Strengthen your PR and immigration profile</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <RingCheck color={UI.success} />
                </span>
                <p className={type.item} style={{ color: UI.secondary }}>
                  <span className="font-semibold">
                    Learn through live online classes with flexibility
                  </span>
                </p>
              </li>
            </ul>


            {/* CTA */}
            <a
              href={cta.href}
              className="mt-6 md:w-fit w-full text-center justify-center inline-flex items-center gap-2 rounded-[12px] px-4 py-3 text-[14px] font-[600]"
              style={{
                background: UI.ctaBg,
                color: UI.ctaText,
                fontFamily: 'Raveo Display, sans-serif',
              }}
            >
              {cta.label}
            </a>
          </div>
          <div
            className="relative flex w-[568px] max-w-full h-[584px] justify-center items-center  rounded-[24px] overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyTakeExam;
