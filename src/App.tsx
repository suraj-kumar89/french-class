import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PopUp from './components/PopUp';
import ThankYouPage from './ThankYouPage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

function App() {
  return (
    <>
      <PopUp />

      <Routes>
        {/* Redirect root URL */}
        <Route
          path="/"
          element={<Navigate to="/french-classes-online" replace />}
        />

        {/* Main page */}
        <Route
          path="/french-classes-online"
          element={<Home />}
        />

        <Route path="/contact_us" element={<Contact />} />
        <Route path="/thank_you" element={<ThankYouPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
      </Routes>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
