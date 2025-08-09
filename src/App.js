import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import BlogPage from "./Pages/BlogPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import BlogAdminPage from "./Pages/BlogAdminPage";
import ErrorBoundary from "./components/ErrorBoundary";

// Home page component
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
        <ImageCarouselPage />
      </PageTransition>
      <PageTransition>
        <Contact />
      </PageTransition>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/admin/blog" element={<BlogAdminPage />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
