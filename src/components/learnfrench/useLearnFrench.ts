import { useMemo } from "react";

/** Brand colors reused from header/sale banner */
export const COLORS = {
  primary: "#826BFB",   // brand / banner bg
  ctaBg: "#A894FF",     // header button bg
  ctaText: "#E4F1FE",   // header button text
  body: "#6B6A70",      // neutral secondary
  bannerText: "#F0EFF1" // banner text
};

/** Copy + icons for the right cards.
 *  icon can be a path to /public/svg or an inline SVG string (below shows inline SVG example).
 */
export const FEATURES = [
  {
    title: "Certified French Tutors:",
    subtitle:
      " Learn from certified French tutors who focus on real speaking ability, strong fundamentals, and structured learning for beginners, professionals, and exam aspirants.",
    // Inline SVG sample (drop your file path in `iconSrc` instead if you prefer)
    iconInline: `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="28" fill="#FBFCF2"/>
  <path d="M26.0085 57.1207V44.3719M66.2502 49.7179L55.8587 56.6117C54.182 57.7242 52.218 58.3171 50.21 58.3171C48.2019 58.3171 46.238 57.7242 44.5612 56.6117L34.1698 49.7205V62.8001C34.1698 64.0791 34.4752 65.3504 35.299 66.3245C37.2161 68.5906 41.751 72.5 50.21 72.5C58.6689 72.5 63.2038 68.5906 65.1209 66.3245C65.9422 65.3504 66.2502 64.0791 66.2502 62.8001V49.7205L72.6149 45.4985C73.0406 45.216 73.39 44.8316 73.6317 44.3798C73.8735 43.9279 74 43.4227 74 42.9094C74 42.3962 73.8735 41.8909 73.6317 41.439C73.39 40.9872 73.0406 40.6028 72.6149 40.3204L55.8561 29.2045C54.1797 28.0926 52.2162 27.5 50.2087 27.5C48.2012 27.5 46.2377 28.0926 44.5612 29.2045L27.1557 40.7519C26.7918 40.9901 26.4946 41.3183 26.2924 41.705C26.0902 42.0917 25.9898 42.5268 26.0008 42.9637M34.1698 49.7179L27.1557 45.0695C26.8065 44.8408 26.5184 44.529 26.3171 44.1618C26.1157 43.7946 26.0071 43.3831 26.0008 42.9637M26.0008 42.9637V44.3745" stroke="#292929" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    title: "Flexible Class Timings: ",
    subtitle: "Choose from morning, evening, or weekend batches designed to fit around work, studies, and busy schedules without compromising learning quality.",
    iconInline: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="28" fill="#F5F8DE"/>
  <path d="M50.4998 72.5C61.6835 72.5 70.7497 63.4338 70.7497 52.25C70.7497 41.0662 61.6835 32 50.4998 32C39.316 32 30.2498 41.0662 30.2498 52.25C30.2498 63.4338 39.316 72.5 50.4998 72.5Z" stroke="#292929" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M58.375 44.375L50.5 52.25M66.25 65.75L68.5 72.5M34.75 65.75L32.5 72.5M28 34.25L34.75 27.5M66.25 27.5L73 34.25M50.5 32V27.5" stroke="#292929" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    title: "100% Online Classes:",
    subtitle: "Attend live French classes from anywhere in the world. All you need is a laptop and an internet connection. Learn without travel, fixed locations, or classroom limitations.",
    iconInline: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="28" fill="#FBFCF2"/>
  <path d="M72 50C72 37.5733 61.9267 27.5 49.5 27.5C37.0732 27.5 27 37.5733 27 50C27 62.4267 37.0732 72.5 49.5 72.5" stroke="#292929" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M51.75 27.6125C51.75 27.6125 58.5 36.5 58.5 50M47.25 72.3876C47.25 72.3876 40.5 63.5 40.5 50C40.5 36.5 47.25 27.6125 47.25 27.6125M28.4175 57.875H49.5M28.4175 42.125H70.5825" stroke="#292929" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M71.7277 63.3134C72.8392 63.9974 72.7694 65.6602 71.6264 65.7907L65.8507 66.4454L63.2609 71.6474C62.7479 72.6802 61.1617 72.1739 60.8985 70.8959L58.0747 57.1349C57.852 56.0549 58.824 55.3754 59.7622 55.9537L71.7277 63.3134Z" stroke="#292929" stroke-width="4"/>
</svg>`
  },
  {
    title: "Proven Learning Outcomes:",
    subtitle: "Our students show consistent improvement in speaking, comprehension, and exam readiness through structured learning, regular feedback, and guided practice.",
    iconInline: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="28" fill="#F5F8DE"/>
  <path d="M57.9889 27.5056H43.0053C41.7453 27.4445 40.512 27.8827 39.573 28.7251C38.634 29.5676 38.0651 30.7463 37.9897 32.0056V46.7872C38.0365 49.2186 38.7463 51.5911 40.0425 53.6487C41.3388 55.7063 43.1723 57.3708 45.3453 58.4627C46.9321 59.3044 48.7009 59.7445 50.4971 59.7445C52.2933 59.7445 54.0621 59.3044 55.6489 58.4627C57.8218 57.3708 59.6554 55.7063 60.9516 53.6487C62.2479 51.5911 62.9577 49.2186 63.0044 46.7872V32.0056C62.9291 30.7463 62.3602 29.5676 61.4212 28.7251C60.4822 27.8827 59.2489 27.4445 57.9889 27.5056Z" stroke="#292929" stroke-width="4" stroke-linecap="round"/>
  <path d="M63.0045 32.0056H68.0007C69.257 31.9504 70.4847 32.3912 71.4189 33.2331C72.3531 34.0749 72.919 35.2502 72.9944 36.5055C72.9873 39.3266 72.2588 42.099 70.8782 44.5592C69.4332 47.1029 67.4152 49.2749 64.9845 50.9029L63.0045 52.2528L61.0708 53.4228M37.9898 32.0056H32.9937C31.7374 31.9504 30.5096 32.3912 29.5754 33.2331C28.6412 34.0749 28.0754 35.2502 28 36.5055C28.0073 39.3271 28.7346 42.1 30.1162 44.5592C31.5612 47.1029 33.5791 49.2749 36.0099 50.9029L37.9898 52.2528L39.9236 53.4228M45.5035 65.7502V58.5284M55.4909 65.7502V58.5284M42.7379 65.7502H58.2565C58.8802 65.7496 59.4979 65.8719 60.0742 66.1103C60.6506 66.3487 61.1743 66.6984 61.6153 67.1394C62.0563 67.5805 62.406 68.1041 62.6444 68.6805C62.8828 69.2568 63.0052 69.8745 63.0045 70.4982V71.3082C63.0045 71.6243 62.879 71.9275 62.6554 72.151C62.4319 72.3745 62.1288 72.5001 61.8127 72.5001H39.1817C38.8656 72.5001 38.5624 72.3745 38.3389 72.151C38.1154 71.9275 37.9898 71.6243 37.9898 71.3082V70.4982C37.9892 69.8747 38.1115 69.2572 38.3497 68.681C38.5879 68.1049 38.9374 67.5813 39.3782 67.1403C39.819 66.6993 40.3424 66.3495 40.9184 66.111C41.4945 65.8725 42.1119 65.7499 42.7354 65.7502H42.7379Z" stroke="#292929" stroke-width="4" stroke-linecap="round"/>
</svg>`
  }
];

export function useLearnGerman() {
  // could compute anything (e.g., dynamic data) here
  const items = useMemo(() => FEATURES, []);
  return { COLORS, items };
}

export default useLearnGerman;
