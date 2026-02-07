import { useCallback, useMemo, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getCountries, getCountryCallingCode } from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";

/** ---- Brand Colors (synced with header + salebanner) ---- */
export const COLORS = {
  primary: "#826BFB", // banner bg / brand
  ctaBg: "#A894FF", // header button bg
  ctaText: "#E4F1FE", // header button text
  body: "#6B6A70", // nav/body text
  bannerText: "#FFFFFF", // banner text
};

// Dropdown Options
export const tefGoalOptions = ["Speaking French confidently", "DELF", "TEF (Canada PR)","TCF","Career or study abroad","Not sure yet"];
export const frenchLevelOptions = ["Absolute beginner", "A1","A2","B1","B2 or Above","Not sure"];

/** ---- Static content (copy lives with the hook for easy edits) ---- */
export const content = {
  badge: "French Classes Online DELF TEF TCF",
  title: "French Classes Online With Certified Trainers",
  subtitle: "Beginner to advanced French classes online with a strong focus on speaking, real usage, and exam readiness",
  description:
    "Join live French classes online led by certified tutors.\n Whether you’re learning French from scratch, preparing for DELF, TEF, or TCF, or learning French for career or immigration goals, our structured classes help you progress with clarity and confidence.\n Experience interactive lessons, personalized feedback, and a supportive community to boost your French skills and achieve your language goals.",
  ctas: {
    explore: "Explore Courses",
    book: "Book Free Trial Class",
    submit: "Get Started for Free →",
  },
  bulletsLeft: [
    "Personalised guidance for every student",
    "Live and recorded classes with French tutors",
    "Regular feedback on speaking and writing",
  ],
  bulletsRight: [
    "Mock tests designed like the official TEF exam",
    "Flexible weekday and weekend batches",
    "Support available throughout your preparation",
  ],
  socialProof: "Trusted by 1000+ learners preparing for TEF worldwide",
  formTitle: "Get Personalized Guidance",
  formConsent: "I agree to be contacted regarding courses and offers.",
};

/** ---- Lead form state & validation ---- */
export type LeadForm = {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  goal: string;
  frenchLevel: string;
  startDate: string;
  learningNeeds: string;
  consent: boolean;
  expertGuidance: boolean;
};

const initial: LeadForm = {
  fullName: "",
  countryCode: "India (+91)",
  phone: "",
  email: "",
  goal: "",
  frenchLevel: "",
  startDate: "",
  learningNeeds: "",
  consent: false,
  expertGuidance: false,
};

export function useTEF() {
  const [form, setForm] = useState<LeadForm>(initial);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const location = useLocation();

  const countryCodeOptions = useMemo(() => {
    return getCountries()
      .map((countryCode) => {
        const callingCode = getCountryCallingCode(countryCode);
        const countryName = en[countryCode]; // Get the country name from the locale
        return `${countryName} (+${callingCode})`;
      })
      .sort(); // Sorting alphabetically
  }, []);

  const setField = useCallback(
    // Added 'string | boolean' to support checkbox and select
    (k: keyof LeadForm, v: string | boolean) => {
      setForm((prev) => ({ ...prev, [k]: v }));
    },
    []
  );

  // ---- UTM extraction from URL ----
  const utm = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
    };
  }, [location.search]);

  // Log once whenever UTMs change (page load / URL change)
  useEffect(() => {
    console.log("UTM from useTEF:", utm);
  }, [utm]);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof LeadForm, string>> = {};

    if (!form.fullName) e.fullName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.countryCode) e.countryCode = "Select your country code";
    if (!/^\+?[0-9]{7,15}$/.test(form.phone)) e.phone = "Enter a valid phone";
    if (!form.goal) e.goal = "Select your goal";
    if (!form.frenchLevel) e.frenchLevel = "Select your level";
    if (!form.startDate) e.startDate = "Select a date";

    // Ensure both consent checkboxes are selected
    if (!form.consent)
      e.consent =
        "You must agree to be contacted regarding courses and offers";
    if (!form.expertGuidance)
      e.expertGuidance =
        "You must agree to expert guidance for the TEF exam";

    return e;
  }, [form]);

  const hasError = useMemo(() => Object.keys(errors).length > 0, [errors]);


  const handleSubmit = useCallback(async () => {
  setTouched({
    fullName: true,
    countryCode: true,
    phone: true,
    email: true,
    goal: true,
    frenchLevel: true,
    startDate: true,
    learningNeeds: true,
    consent: true,
    expertGuidance: true,
  });

  if (hasError) return;

  setLoading(true);

  const [firstName, ...lastNameParts] = form.fullName.trim().split(" ");
  const lastName = lastNameParts.join(" ");
  const countryOnly = form.countryCode.split(" (")[0];

  try {
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/245021836/b2cfa0dc-0f9c-48da-be2f-563620025a39`;

    const payload = {
      fields: [
        { name: "firstname", value: firstName },
        { name: "lastname", value: lastName },
        { name: "email", value: form.email },
        { name: "phone", value: form.phone },
        { name: "country", value: countryOnly },

        { name: "tef_goal", value: form.goal },
        { name: "french_level", value: form.frenchLevel },
        { name: "preferred_start_date", value: form.startDate },
        { name: "message", value: form.learningNeeds },

        { name: "consent", value: form.consent ? "Yes" : "No" },
        { name: "expert_guidance", value: form.expertGuidance ? "Yes" : "No" },

        { name: "utm_source", value: utm.utm_source },
        { name: "utm_medium", value: utm.utm_medium },
        { name: "utm_campaign", value: utm.utm_campaign },
        { name: "utm_term", value: utm.utm_term },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("HubSpot API error:", error);
      alert("Submission failed. Please try again.");
      return;
    }

    setTouched({});
    navigate("/thank_you", { replace: true });
  } catch (err) {
    console.error("HubSpot submission error:", err);
    alert("Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
}, [form, hasError, navigate, utm]);





// <script src="https://js-na2.hsforms.net/forms/embed/245021836.js" defer></script>
// <div class="hs-form-frame" data-region="na2" data-form-id="b2cfa0dc-0f9c-48da-be2f-563620025a39" data-portal-id="245021836"></div>

  // const handleSubmit = useCallback(async () => {
  //   setTouched({
  //     fullName: true,
  //     countryCode: true,
  //     phone: true,
  //     email: true,
  //     goal: true,
  //     frenchLevel: true,
  //     startDate: true,
  //     learningNeeds: true,
  //     consent: true,
  //     expertGuidance: true,
  //   });

  //   if (hasError) return;

  //   try {
  //     setLoading(true);

  //     const payload = {
  //       fullName: form.fullName,
  //       countryCode: form.countryCode, // Send the country code here
  //       phone: form.phone,
  //       email: form.email,
  //       goal: form.goal,
  //       frenchLevel: form.frenchLevel,
  //       startDate: form.startDate,
  //       learningNeeds: form.learningNeeds,
  //       consent: form.consent ? "true" : "false",
  //       expertGuidance: form.expertGuidance ? "true" : "false",
  //       // attach UTM params
  //       ...utm,
  //     };

  //     console.log("Submitting payload with UTM:", payload);

  //     const API_BASE_URL = "https://onlinefrenchskool.com";

  //     const emailResponse = await fetch(`${API_BASE_URL}/api/submit`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     const emailJson = await emailResponse.json();

  //     // Only navigate to the thank you page if the submission was successful
  //     if (emailJson?.message === "Emails sent and data stored successfully") {
  //       setTouched({});
  //       navigate("/thank_you", { replace: true }); // Use replace to avoid history stack issue
  //     } else {
  //       alert(emailJson?.error || "Something went wrong. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error("Error submitting form:", err);
  //     alert("Network error. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [form, hasError, navigate, utm]);



  
  return {
    COLORS,
    content,
    form,
    setField,
    errors,
    touched,
    setTouched,
    handleSubmit,
    loading,
    tefGoalOptions,
    frenchLevelOptions,
    countryCodeOptions,
  };
}

export default useTEF;
