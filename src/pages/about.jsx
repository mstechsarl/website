import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={""} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>MSTeck is a Mechanical Contracting Company involving design and execution of Mechanical systems in commercial and residential sectors since 2006.</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>MSTech, established in Lebanon in 2006, is a leading mechanical contracting company specializing in planning, consultancy, project management, and installation of mechanical systems. MSTech prioritizes technical efficiency while aligning with the owner's vision, optimizing space, promoting economic efficiency, incorporating sustainability and integrating seamlessly with architectural designs.In 2019, MSTech expanded to Germany, focusing on planning, consultancy and project management of mechanical systems, for residential buildings, office buildings, and hotels. With over 2 decades of experience, MSTech continues to excel in designing and executing mechanical systems for both commercial and residential sectors,adapting to meet client needs. </p>
                </div>
                <figure>
                  <img className="w-100" src="/img/plumbing.jpg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>Founders & CEOs</h3>
                  <h3>Eng. Mostafa Shouman & Mrs. Siham Kobrosli</h3>
                  <p>After founding MSTech in 2006 and with 15+ years we lead the
                    expansion to key location in lebanon. Specialized in Plumbing,
                    heating, ventilation and air conditioning, MSTech is one of the
                    leader mechanical contracting companies.
                    In 2019, we established our branch office in Germany offering
                    design, shopdrawings, consultancy and project management for
                    mechanical services.
                    Join us in shaping the future of mechanical systems through
                    innovation and excellence.
                    </p>
                </div>
                <figure>
                  <img className="w-100" src="/img/pic1.jpg" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plan</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/pic5.jpg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Planning</h3>
                <p>Precision in planning defines the excellence of our mechanical contracting company, guaranteeing seamless and successful project execution.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Consultancy</h3>
                <p>Our consultancy services serve as the guiding force, enhancing the efficiency and success of our contracting projects through strategic insights and expert guidance.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Project Management</h3>
                <p>Orchestrating streamlined excellence, ensuring efficient operations, and providing strategic direction for success in contracting endeavors.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Installation</h3>
                <p>Ensuring client satisfaction, optimal system performance, compliance with regulations, and overall safety in our mechanical contracting company.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6" >
              <div className="data">
                <h2>Our Mission</h2>
                <p>
                  Lead in the design and execution of mechanical
                  systems, specializing in HVAC, site utilities, plumbing and fire
                  fighting. Since our establishment in 2006, we are dedicated to
                  delivering innovative, reliable, and sustainable solutions for the
                  commercial and residential sectors. We are committed to excellence,
                  ensuring the efficient utilization of space and energy,
                  while minimizing environmental impacts.
                </p>
                <h2>Our Vision</h2>
                <p>
                  MSTech is to be the premier mechanical contracting company, setting
                  mechanical services for quality, efficiency, and environmental responsibility.
                  We strive to be recognized as leaders in HVAC, site utilities,
                  plumbing and fire fighting systems continuously pushing the boundaries
                  of innovation. Through our unwavering commitment to excellence,
                  we aim to shape a future where every mechanical system we
                  design and execute enhances both the built environment and the
                  well-being of its occupants.
                </p>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/pic4.png" alt="About key Benefits" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}


      <RenovationSection />

      
    </Layouts>
  );
};
export default About;





