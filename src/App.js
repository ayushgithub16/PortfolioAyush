import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import PersonalExperience from "./components/PersonalExperience";
import LeadershipEngagement from "./components/LeadershipEngagement";
import ExperienceCard from "./components/ExperienceCard";
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
      <ExperienceCard />
      <ImageCarouselPage />
    </>
  );
}

export default App;
