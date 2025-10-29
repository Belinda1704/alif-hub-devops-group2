import Hero from "../components/hero";
import Features from "../components/Features";
import AboutUs from "../components/aboutUs";
import TargetUsers from "../components/TargetUser";

const Home = () => {
  return (
    <div className="pt-16 sm:pt-20 p-4 bg-gradient-to-br from-blue-50 to-white">
      <Hero />
      <Features />
      <AboutUs />
      <TargetUsers />
    </div>
  );
};

export default Home;