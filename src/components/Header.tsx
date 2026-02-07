import React from "react";

type HeaderProps = {
  onCtaClick?: () => void;
  ctaLabel?: string;
  ctaBg?: string;
};

const MenuIcon = ({ className = "" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" className={className}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="#6B6A70" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" className={className}>
    <path d="M6 6l12 12M18 6L6 18" stroke="#6B6A70" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Header({
  onCtaClick,
  ctaLabel = "Book Free Trial Class",
  ctaBg = "",
}: HeaderProps) {
  const [open, setOpen] = React.useState(false);

  // lock scroll when overlay is open + close on ESC
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-[#D1D0D6] bg-white">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="51" viewBox="0 0 80 51" fill="none">
              <path d="M45.7996 24.6133H51.1034V25.9889H47.3065V28.1175H50.6574V29.4925H47.3065V32.9851H45.7996V24.6133Z" fill="#022850"/>
              <path d="M51.6264 27.0051H53.0003V32.9844H51.6264V27.0051ZM55.0494 26.933V28.1773C53.814 28.0596 52.9444 28.6784 53.0003 29.9831H52.6264C52.6425 28.1305 53.1624 26.7759 55.0487 26.933H55.0494Z" fill="#022850"/>
              <path d="M58.2997 33.1527C55.3879 33.2612 54.0786 29.6873 56.0034 27.717C58.1842 25.7084 61.7072 27.2923 61.1438 30.3658H56.2382V29.3489H60.0103L59.8295 29.5165C59.8202 27.6566 57.068 27.4889 56.563 29.1696C56.2208 30.1107 56.5239 31.4271 57.5394 31.8122C58.386 32.15 59.468 31.9022 59.9258 31.0708L60.914 31.8363C60.2892 32.7164 59.3966 33.1539 58.2985 33.1521L58.2997 33.1527Z" fill="#022850"/>
              <path d="M65.9382 29.5769C66.0469 28.181 64.5941 27.6183 63.66 28.5126C62.9401 29.1203 63.3736 32.1438 63.2625 32.9851H61.8885V27.0057H63.2625V28.1416H63.0575C63.6308 26.6859 65.6538 26.4098 66.6855 27.5019C67.7557 28.4448 67.1718 31.7408 67.3122 32.9851H65.9382V29.5769Z" fill="#022850"/>
              <path d="M68.2302 28.7215C69.0718 26.3673 72.9538 26.1429 73.9252 28.5003L72.7439 29.1104C71.9401 27.3077 69.2904 28.083 69.3929 29.9954C69.2898 31.93 71.9991 32.6923 72.7557 30.8323L73.9364 31.4178C73.3445 32.9992 71.3818 33.5089 69.8929 32.9191C68.2414 32.3232 67.5954 30.266 68.2296 28.7209L68.2302 28.7215Z" fill="#022850"/>
              <path d="M78.5911 29.5769C78.6992 28.1816 77.2476 27.6177 76.3128 28.5126C75.593 29.1203 76.0265 32.1438 75.9153 32.9851H74.5414V24.3501H75.9153V28.141H75.7104C76.2836 26.6859 78.3066 26.4086 79.3383 27.5012C80.4079 28.4442 79.824 31.7401 79.9644 32.9844H78.5905V29.5763L78.5911 29.5769Z" fill="#022850"/>
              <path d="M47.5506 22.2498C44.7164 21.199 44.0704 17.1105 46.1642 15.0675C48.9146 12.3958 53.7767 14.2441 53.6556 18.2013C53.7556 21.411 50.4574 23.438 47.5506 22.2498ZM50.4556 20.958C53.745 19.323 51.8624 14.0234 48.1537 15.444C46.6326 16.032 46.1245 17.9647 46.6649 19.3908C47.1649 20.897 49.0344 21.5755 50.4556 20.958Z" fill="#022850"/>
              <path d="M58.6717 18.9785C58.7798 17.5826 57.3276 17.0199 56.3935 17.9141C55.6736 18.5224 56.1071 21.546 55.996 22.3872H54.622V16.4067H55.996V17.5431H55.791C56.3637 16.0874 58.3879 15.8101 59.419 16.9034C60.4892 17.8451 59.9053 21.1429 60.0457 22.3866H58.6717V18.9779V18.9785Z" fill="#022850"/>
              <path d="M61.0283 22.3872V13.7523H62.4022V22.3872H61.0283Z" fill="#022850"/>
              <path d="M64.1134 15.4027C62.9774 15.4298 62.9668 13.6549 64.1016 13.6685C65.2681 13.629 65.2761 15.4292 64.1134 15.4027ZM63.4264 22.3872H64.8004V16.4067H63.4264V22.3872Z" fill="#022850"/>
              <path d="M69.8749 18.9785C69.983 17.5826 68.5308 17.0199 67.5966 17.9141C66.8768 18.5224 67.3103 21.546 67.1991 22.3872H65.8252V16.4067H67.1991V17.5431H66.9942C67.5668 16.0874 69.5911 15.8101 70.6221 16.9034C71.6923 17.8451 71.1085 21.1429 71.2488 22.3866H69.8749V18.9779V18.9785Z" fill="#022850"/>
              <path d="M75.1048 22.5542C72.1923 22.6633 70.8836 19.0888 72.8085 17.1185C74.9899 15.11 78.511 16.6932 77.9495 19.7673H73.0439V18.7511H76.8166L76.6358 18.9181C76.6259 17.0581 73.8737 16.8905 73.3693 18.5717C73.0265 19.5128 73.3308 20.8286 74.3457 21.2144C75.193 21.5521 76.2743 21.3044 76.7327 20.473L77.7203 21.2378C77.0955 22.1179 76.2029 22.5555 75.1054 22.5536L75.1048 22.5542Z" fill="#022850"/>
              <path d="M46.4562 43.2483C45.8574 42.8976 45.3971 42.3836 45.076 41.7063L46.3294 40.9883C47.3437 43.4744 51.6667 42.3355 50.0059 40.576C49.0972 39.9696 47.7363 39.9406 46.7456 39.434C45.5953 38.9773 45.1586 37.5913 45.6909 36.4856C46.1909 35.4336 47.3853 35.0182 48.535 35.0207C49.9835 35.0182 51.0972 35.6129 51.7773 36.8622L50.5475 37.5796C49.5885 35.3948 45.7524 36.4832 47.3295 38.0523C48.5791 38.8084 50.5518 38.6223 51.5121 39.9061C51.9674 40.449 51.9711 41.5861 51.645 42.2381C50.7804 44.0143 47.9686 44.1228 46.4562 43.2483Z" fill="#022850"/>
              <path d="M54.022 43.5829H52.6481V34.948H54.022V43.5829ZM58.096 37.6036L53.8531 41.9922V40.3301L56.4202 37.6036H58.096ZM54.7208 40.6771L55.6003 39.8155L58.168 43.5829H56.6612L54.7208 40.6771Z" fill="#022850"/>
              <path d="M61.2264 43.7512C58.8823 43.8276 57.4245 41.4055 58.2798 39.3317C59.1929 36.8246 63.2494 36.8215 64.1618 39.3317C65.0221 41.3766 63.5488 43.8411 61.227 43.7505L61.2264 43.7512ZM61.2264 42.4951C63.5879 42.5081 63.5811 38.6618 61.2146 38.692C58.8674 38.6716 58.8761 42.5278 61.2264 42.4951Z" fill="#022850"/>
              <path d="M68.0215 43.7512C65.6774 43.8276 64.2196 41.4055 65.0749 39.3317C65.9879 36.8246 70.0445 36.8215 70.9569 39.3317C71.8172 41.3766 70.3439 43.8411 68.0221 43.7505L68.0215 43.7512ZM68.0215 42.4951C70.383 42.5081 70.3762 38.6618 68.0097 38.692C65.6625 38.6716 65.6712 42.5278 68.0215 42.4951Z" fill="#022850"/>
              <path d="M71.9197 43.5829V34.948H73.2936V43.5829H71.9197Z" fill="#022850"/>
              <path d="M36.6778 43.7709C36.6244 43.782 36.5605 43.782 36.507 43.782H30.6107C29.4399 43.782 28.4902 44.7416 28.4902 45.9248V50.2858C28.4902 50.8829 27.807 51.2157 27.3449 50.8429L19.1715 44.2491C18.7958 43.9459 18.3293 43.7814 17.8492 43.7814H2.98263C1.33541 43.7814 0 42.4317 0 40.7664V17.1992C0 15.534 1.33541 14.1843 2.98263 14.1843H7.9106V33.9477C7.9106 35.3849 8.87272 36.6385 10.2516 36.9947L35.1064 43.4566L35.9511 43.6729C36.1971 43.7376 36.4431 43.7703 36.6778 43.7703V43.7709Z" fill="#FFEE70"/>
              <path d="M35.1064 43.4578L10.2516 36.9959C8.87272 36.6391 7.9106 35.3862 7.9106 33.9489V9.53865C7.9106 7.47467 9.83484 5.97275 11.8125 6.48058L16.7939 7.77727V28.038C16.7939 29.0968 17.2858 30.102 18.1299 30.7393L34.5182 43.101C34.7108 43.2415 34.9033 43.3604 35.1064 43.4578Z" fill="#38B9F2"/>
              <path d="M39.853 15.7411V40.6265C39.853 40.7344 39.853 40.8318 39.8425 40.9291C39.7679 42.4526 38.5598 43.6846 37.0524 43.7709C36.9455 43.7709 36.8493 43.782 36.7424 43.782C36.7213 43.782 36.6996 43.782 36.6785 43.7709C36.4431 43.7709 36.1971 43.7382 35.9518 43.6735L35.107 43.4572C34.9039 43.3598 34.7114 43.2409 34.5188 43.1003L18.1305 30.7387C17.2858 30.1008 16.7945 29.0962 16.7945 28.0374V3.37938C16.7945 0.602341 19.9163 -0.985857 22.1181 0.678145L38.5064 13.0398C39.3512 13.6771 39.8536 14.6823 39.8536 15.7411H39.853Z" fill="#4A3CF3"/>
            </svg>
          </a>

          {/* Desktop nav */}
          <nav className="hidden h-10 w-[397px] items-center justify-between text-[16px] font-semibold leading-6 text-[#575459] md:flex">
            <a href="#course">Courses</a>
            <a href="#benefits">Benefits</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/contact_us">Contact</a>
          </nav>

          {/* Right side: CTA + hamburger (hamburger shows on mobile) */}
          <div className="flex items-center gap-3">
            <a
              type="button"
              href="/contact_us"
              className="inline-flex h-[48px] border-[#38400D] border-[1px] w-fit items-center justify-center rounded-[8px] px-3 py-3 transition-transform duration-150 hover:translate-y-[-1px] active:translate-y-0 font-semibold md:text-[16px] text-[14px] leading-[24px] text-[#38400D]  "
              style={{
                backgroundColor: ctaBg,
              }}
            >
              {ctaLabel}
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-overlay"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          id="mobile-overlay"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100]"
        >
          {/* dimmer */}
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div
            className="
              relative mx-auto flex h-full w-full  flex-col
              bg-[#ffffff] shadow-xl sm:rounded-none
            "
          >
            {/* top bar within overlay */}
            <div className="flex items-center justify-between px-4 py-4">
              <img src="https://media.onlinefrenchskool.com/logo.svg" alt="Logo" className="h-7 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-md p-2"
              >
                <CloseIcon />
              </button>
            </div>

            {/* list with dividers (like your mock) */}
            <div className="mx-4 overflow-hidden rounded-xl bg-white px-8">
              {[
                { label: "Courses", href: "#courses" },
                { label: "Benefits", href: "#benefits" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((item, i, arr) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 border-b-[1.5px] border-[#D1D0D6]"
                >
                  <span className="text-[14px] font-medium text-[#242325]">
                    {item.label}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6" stroke="#D1D0D6" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </a>
              ))}
            </div>


            {/* bottom CTAs */}
            <div className="mt-auto px-4 pb-6">
              <button
                onClick={() => {
                  setOpen(false);
                  onCtaClick?.();
                }}
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded-xl font-semibold text-white"
                
              >
                Book Free Trial Class 
              </button>
              <a
                href="#courses"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#D1D0D6] bg-white text-sm font-semibold text-[#374151]"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
