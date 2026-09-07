import BannerFour from "./components/BannerFour";
import BannerOne from "./components/BannerOne";
import BannerThree from "./components/BannerThree";
import BannerTwo from "./components/BannerTwo";
import BookConsultant from "./components/BookConsultant";
import Hero from "./components/Hero";
import ImageText from "./components/ImageText";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <BannerOne />
      <ImageText />
      <BannerTwo />
      <BannerThree />
      <BannerFour />
      <BookConsultant />
      <Testimonial />
    </main>
  );
}
