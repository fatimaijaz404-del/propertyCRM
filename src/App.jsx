import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
import FeaturesOverview from "./components/FeaturesOverview";
import OneWindowSolution from "./components/OneWindowSolution";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FeaturesOverview />
      <OneWindowSolution />
      {/* <FAQs /> */}

    </div>
  );
}

export default App;