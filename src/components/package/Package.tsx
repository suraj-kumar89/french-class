"use client";

import React from "react";
import usePackage from "./usePackage";

/** Typography scale */
const t = {
  caption:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
  h2:
    "md:text-[40px] text-[28px] leading-[35px] md:leading-[50px] font-[600] [font-family:'Raveo_Display',sans-serif] text-[#022850] text-center",
  cardTitle:
    "text-[32px] leading-[42px] font-[600] [font-family:'Raveo_Display',sans-serif]",
  perk:
    "text-[14px] leading-[21px] font-[400] [font-family:'Raveo_Display',sans-serif]",
};

export default function Package() {
  const { UI, plans } = usePackage();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1600px] px-7 md:px-[120px] py-16 md:py-24">

        {/* Section header */}
        <div className="mx-auto max-w-[1300px] flex flex-col items-center">
          <div
            className={`inline-flex items-center gap-[6px] rounded-[36px] border px-3 py-1 ${t.caption}`}
            style={{
              background: UI.captionBg,
              borderColor: UI.captionBorder,
              color: UI.captionText,
            }}
          >
            Learning Pace
          </div>

          <h2 className={`mt-6 md:mt-4 ${t.h2}`}>
            Customized <br className="block md:hidden" />
            Delivery <span className="hidden md:inline"> - </span>Your Way
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mx-auto mt-10 grid max-w-[1300px] grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="relative rounded-[24px] border border-[#E7E6EA] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              style={{ background: plan.bg }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute right-4 top-4 rounded-full px-3 py-1 text-[12px] font-[600]"
                  style={{
                    background: "#ffffff",
                    color: "#4A3CF3",
                    border: "0.8px solid #4A3CF3",
                    fontFamily: "Raveo Display, sans-serif",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Title */}
              <h3
                className={`${t.cardTitle} whitespace-pre-line`}
                style={{ color: plan.bg === "#111827" ? "#FFFFFF" : "#022850" }}
              >
                {plan.title}
              </h3>

              {/* Description */}
              <p
                className="mt-2 text-[14px] leading-[21px] font-[400]"
                style={{
                  fontFamily: "Raveo Display, sans-serif",
                  color: plan.bg === "#111827" ? "#D1D5DB" : "#47464A",
                }}
              >
                {plan.description}
              </p>

              <div className="mt-5 h-px w-full bg-[#E9E8ED]" />

              {/* Perks */}
              <ul className="mt-5 space-y-4">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span
                      className="text-[14px]"
                      style={{
                        color:
                          plan.bg === "#111827" ? "#DBF5E9" : "#4A3CF3",
                      }}
                    >
                      ✔
                    </span>
                    <span
                      className={t.perk}
                      style={{
                        color:
                          plan.bg === "#111827" ? "#F0EFF1" : "#38400D",
                      }}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => (window.location.href = "/contact_us")}
                className="mt-6 w-full rounded-[12px] px-5 py-4 font-[600]"
                style={{
                  background:
                    plan.bg === "#111827" ? "#FFFFFF" : UI.primary,
                  color: "#38400D",
                  fontFamily: "Raveo Display, sans-serif",
                }}
              >
                {plan.id === "three"
                  ? "Join Super-Intensive Now"
                  : "Start Programme"}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
