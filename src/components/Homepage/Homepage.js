import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { OurFeatured } from "./OurFeatured";
import { ChooseUs } from "./ChooseUs";
import Loader from "./Loader";
import Testimonials from "./Testimonials";
import { HowItWork } from "./HowItWork";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import Cities from "./Cities";
import Offers from "./Offers";

function Homepage() {
  return (
    <>
      <Header />
      <OurFeatured />
      <ChooseUs />
      <HowItWork />
      <Cities />

      <Offers />
      {/* <Loader /> */}

      <Testimonials />
      <Footer />

      <BackToTop />
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      {/* <div class="message error-msg">
        <i class="error-icon">&#10007;</i>
        <p></p>
      </div> */}
    </>
  );
}

export default Homepage;
