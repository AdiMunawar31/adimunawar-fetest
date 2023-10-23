import Footer from "../../components/Footer";
import HeroSection from "../../components/Landing/HeroSection";
import Parallax from "../../components/Landing/Parallax";
import Testimonial from "../../components/Landing/Testimonial";
import Navbar from "../../components/Navbar";

const Landing = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar />
      <HeroSection />
      <Parallax />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Landing;
