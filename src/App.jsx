import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
import FeaturesOverview from "./components/FeaturesOverview";
import OneWindowSolution from "./components/OneWindowSolution";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
   // ... <Footer /> as last element inside <div>

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FeaturesOverview />
      <OneWindowSolution />
      <Testimonials />
      <FAQs /> 
       <Footer/>

    </div>
  );
}

export default App;