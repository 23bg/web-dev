import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import PricingCards from "./components/PricingCards";
import Testmonials from "./components/Testmonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#fafaf8]">
      <Navbar />
      <div className="bg-[#fafaf8]">
        <Home />
        <Pricing />
      </div>
      <PricingCards />
      <Testmonials />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
