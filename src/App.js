import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import PersonalExperience from "./components/PersonalExperience";
import LeadershipEngagement from "./components/LeadershipEngagement";
import ExperienceCards from "./components/ExperienceCards";
import ImageCarouselPage from "./components/ImageCarouselPage";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Education />
      <Skills />
      <PersonalExperience />
      <LeadershipEngagement />
      <ExperienceCards />
      <ImageCarouselPage />
    </>
  );
}

export default App;
