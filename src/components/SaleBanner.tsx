import React from "react";

type SaleBannerProps = {
  /** When the sale ends. Accepts Date, ISO string, or epoch (ms). */
  endTime: Date | string | number;
  /** Optional: text before the timer */
  label?: string;
  /** Optional: link target */
  ctaHref?: string;
  /** Optional: text for the CTA */
  ctaText?: string;
};

const SaleBanner: React.FC<SaleBannerProps> = ({
  endTime,
  label = "Sale Ends Soon",
  ctaHref = "/",
  ctaText = "GET IT NOW →",
}) => {
  const [timeLeft, setTimeLeft] = React.useState(() => getRemaining(endTime));
  const intervalRef = React.useRef<number | null>(null);

  // Tick every second
  React.useEffect(() => {
    // set immediately in case endTime changed
    setTimeLeft(getRemaining(endTime));

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        const next = getRemaining(endTime);
        // Stop when reached zero to save CPU
        if (next.total <= 0 && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return next;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [endTime]);

  const isOver = timeLeft.total <= 0;

  return (
    <div
      className="w-full text-center"
      style={{
        backgroundColor: "#D3E373",
        color: "#38400D",
        fontFamily: "Raveo Display, sans-serif",
        fontWeight: 600,
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0%",
        padding: "6px 0",
      }}
      aria-live="polite"
    >
      {/* Use a monospace font for stable digit widths */}
      <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
        {label},{" "}
        {isOver
          ? "00:00:00:00"
          : `${pad(timeLeft.days)}:${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(
              timeLeft.seconds
            )}`}
      </span>
      {/** CTA */}
      <a
        href={ctaHref}
        style={{
          textDecoration: "underline",
          marginLeft: "4px",
          color: "#38400D",
        }}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default SaleBanner;

/** Helpers */
function getRemaining(end: Date | string | number) {
  const endTs =
    typeof end === "number"
      ? end
      : typeof end === "string"
      ? new Date(end).getTime()
      : end.getTime();

  const now = Date.now();
  const total = Math.max(0, endTs - now);

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
}

function pad(n: number) {
  // If days exceed 99, still show at least 2 digits; clamp to string
  return n.toString().padStart(2, "0");
}
