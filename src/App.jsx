import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
import FeaturesOverview from "./components/FeaturesOverview";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FeaturesOverview />
      {/* <FAQs /> */}

    </div>
  );
}

export default App;