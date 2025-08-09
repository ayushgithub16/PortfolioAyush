import React from "react";
import PageTransition from "../components/PageTransition";
import HeroSection from "../components/HeroSection";
import Education from "../components/Education";
import Skills from "../components/Skills";
import PersonalExperience from "../components/PersonalExperience";
import LeadershipEngagement from "../components/LeadershipEngagement";
import ExperienceCard from "../components/ExperienceCard";
import KeyAchievements from "../components/KeyAchievements";
import ImageCarouselPage from "../components/ImageCarouselPage";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Home page component with all sections
function HomePage() {
  return (
    <>
      <PageTransition>
        <HeroSection />
      </PageTransition>
      <PageTransition>
        <Education />
      </PageTransition>
      <PageTransition>
        <Skills />
      </PageTransition>
      <PageTransition>
        <PersonalExperience />
      </PageTransition>
      <PageTransition>
        <LeadershipEngagement />
      </PageTransition>
      <PageTransition>
        <ExperienceCard />
      </PageTransition>
      <PageTransition>
        <KeyAchievements />
      </PageTransition>
      <PageTransition>
        <ImageCarouselPage />
      </PageTransition>
      <PageTransition>
        <Contact />
      </PageTransition>
      <Footer />
    </>
  );
}

export default HomePage;
