import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import PersonalExperience from "./components/PersonalExperience";
import LeadershipEngagement from "./components/LeadershipEngagement";
import ExperienceCard from "./components/ExperienceCard";
import ImageCarouselPage from "./components/ImageCarouselPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <>
      <Header />
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
        <ImageCarouselPage />
      </PageTransition>
      <PageTransition>
        <Contact />
      </PageTransition>
      <Footer />
    </>
  );
}

export default App;
