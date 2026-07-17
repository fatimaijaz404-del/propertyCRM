import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
import FeaturesOverview from "./components/FeaturesOverview";
import OneWindowSolution from "./components/OneWindowSolution";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FeaturesOverview />
      <OneWindowSolution />
      <Testimonials />
      {/* <FAQs /> */}

    </div>
  );
}

export default App;