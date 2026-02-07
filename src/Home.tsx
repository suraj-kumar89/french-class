import React from "react";
import SaleBanner from "./components/SaleBanner"; // adjust the path if different
import Header from "./components/Header";
import German from "./components/german/German";
import LearnGerman from "./components/learnfrench/LearnFrench";
import CourseLevel from "./components/courselevel/CourseLevel";
import CourseModules from "./components/coursemodules/CourseModules";
// import LearnMode from "./components/learnmode/LearnMode";
import Segmentation from "./components/segmentation/Segmentation";
import Package from "./components/package/Package";
import Footer from "./components/Footer";
import FAQ from "./components/faq/FAQ";
import FreeClass from "./components/freeclass/FreeClass";
import Journey from "./components/journey/Journey";
import WhyTakeExam from "./components/whytakeexam/WhyTakeExam";

const Home: React.FC = () => {
  return (
    <div>
      <SaleBanner endTime="2025-11-13T23:59:00+05:30" />
      <Header onCtaClick={() => window.location.assign("#book")} />
      <German/>
      <LearnGerman/>
      <CourseLevel />
      <CourseModules />
       <Package />
      {/* <LearnMode /> */}
      <Segmentation />
      <WhyTakeExam/>
     
      <Journey />
      <FreeClass />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
