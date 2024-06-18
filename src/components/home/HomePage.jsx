import HeroSection from "./HeroSection";
import "./HomePage.css";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProduct from "./FeaturedProduct";
const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy Iphone 14 Pro"
        subtitle="Experience the power of the latest iphine 14 with our most pro camera ever."
        link="https://cartwish10.netlify.app/product/66717149686893497186a5ee"
        image={iphone}
      />
      <FeaturedProduct />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add studio display and color-mached ,agic accosssories to yor bag after configure your Mac mini."
        link="https://cartwish10.netlify.app/product/66717149686893497186a5fa"
        image={mac}
      />
    </div>
  );
  a;
};

export default HomePage;
