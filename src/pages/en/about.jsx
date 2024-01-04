import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";
import aboutPageData from "@data/sections/about-page";
import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic(() => import("@components/sliders/Team"), {
  ssr: false,
});
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const About = () => {
  return (
    <Layouts en>
      <PageBanner pageTitle={"About Us"} pageDesc={""} en />

      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>{aboutPageData.title}</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div id="company" className="who-we-are ">
                <div>
                  <h3>{aboutPageData.whoTitle}</h3>
                  <p>{aboutPageData.whoDes}</p>
                </div>
                <div id="founder" className="Founder">
                  <h3>{aboutPageData.founderTitle1}</h3>
                  <h3>{aboutPageData.founderTitle2}</h3>
                  <p>{aboutPageData.founderDes}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are">
                <figure>
                  <img
                    className="w-100"
                    src="/img/home21.jpg"
                    alt="About Image One"
                  />
                </figure>
                <figure>
                  <img
                    className="w-101"
                    src="/img/pic1.jpg"
                    alt="About Image Two"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection en />

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits ">
        <div className="container">
          <div className="row align-items-center space">
            <div className="col-lg-6">
              <div id="mission" className="data mission">
                <h2>{aboutPageData.missionTitle}</h2>
                <p>{aboutPageData.missionDes}</p>
              </div>
              <div id="vision" className="data">
                <h2>{aboutPageData.visionTitle}</h2>
                <p>{aboutPageData.visionDes}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="data">
                <figure>
                  <img
                    className="w-100"
                    src="/img/pic4.png"
                    alt="About key Benefits"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

      <RenovationSection en />
    </Layouts>
  );
};
export default About;
