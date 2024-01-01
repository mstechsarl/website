import { useState } from "react";
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts en>
      <PageBanner pageTitle={"Services"} pageDesc={""} en />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <span>Plan</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{ position: "relative", zIndex: "9" }}>
            <img
              className="w-100"
              src="/img/pic5.jpg"
              alt="About How It Works"
            />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">1.</div>
                <h3>Planning</h3>
                <p>
                  Precision in planning defines the excellence of our mechanical
                  contracting company, guaranteeing seamless and successful
                  project execution.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">2.</div>
                <h3>Consultancy</h3>
                <p>
                  Our consultancy services serve as the guiding force, enhancing
                  the efficiency and success of our contracting projects through
                  strategic insights and expert guidance.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">3.</div>
                <h3>Project Management</h3>
                <p>
                  Orchestrating streamlined excellence, ensuring efficient
                  operations, and providing strategic direction for success in
                  contracting endeavors.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">4.</div>
                <h3>Installation</h3>
                <p>
                  Ensuring client satisfaction, optimal system performance,
                  compliance with regulations, and overall safety in our
                  mechanical contracting company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/* Construction Services Start */}
      <section className="gap construction-services">
        <div className="container">
          <Tab.Container
            id="services-tab-content"
            defaultActiveKey="tab-service-0"
          >
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="services-nav">
                  <h2>Mechanical Services</h2>
                  <Nav variant="pills" className="nav nav-pills mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-0">Plumbing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-1">
                        Heating System
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-2">
                        Air conditioning
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-3">Solar System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-4">Planning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-5">Maintenance</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="col-lg-8">
                <Tab.Content>
                  <Tab.Pane
                    eventKey="tab-service-0"
                    title="General Contracting"
                  >
                    <figure>
                      <img
                        className="w-100"
                        src="/img/plumbing2.jpg"
                        alt="Services Nav Image 1"
                      />
                      <figcaption>
                        <h3>Plumbing</h3>
                        <p>
                          We design and execute plumbing that deliver water to
                          the various faucets, fixtures and water and carry away
                          waste water without clogs to sewers or septic tanks.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="tab-service-1"
                    title="Construction Consultant"
                  >
                    <figure>
                      <img
                        className="w-100"
                        src="/img/heat.jpg"
                        alt="Services Nav Image 2"
                      />
                      <figcaption>
                        <h3>Heating System</h3>
                        <p>
                          We design and execute heating systems coordinated with
                          each other and offer high comfort with low energy
                          costs, whether in new or renovation building.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-service-2" title="Metal Roofin">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/ac.jpg"
                        alt="Services Nav Image 3"
                      />
                      <figcaption>
                        <h3>Air Conditioning</h3>
                        <p>
                          We design and execute cooling systems with combination
                          of proper insulation, energy-efficient windows and
                          doors, day lighting, shading, and ventilation.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-service-3" title="House Renovation">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/solar.jpg"
                        alt="Services Nav Image 4"
                      />
                      <figcaption>
                        <h3>Solar System</h3>
                        <p>
                          We design solar heating systems by using solar energy
                          to heat water then transfer the solar heat directly to
                          the interior space or to a storage system for later
                          use.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-service-4" title="Green Building">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/planing.jpg"
                        alt="Services Nav Image 5"
                      />
                      <figcaption>
                        <h3>Planning</h3>
                        <p>
                          Using Codes ,Using drawing programs like AutoCAD,
                          Autodesk inventor and Revit, 2D and 3D drawings(Plans
                          and detailed sections) ,P & ID and Isometry drawings
                          ,Bill of quantities and Specifications.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab-service-5" title="Green Building">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/maintenance.jpg"
                        alt="Services Nav Image 5"
                      />
                      <figcaption>
                        <h3>Maintenance</h3>
                        <p>
                          Our team is ready to check and repair the various
                          mechanical system at your residence, building,
                          hospital, school and etc… The solution to your heating
                          and plumbing problems.
                        </p>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}

      <CountersSection en />

      {/* Service Style Two Start 
      <section className="gap service-style-two">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="heading-icon" />
          </figure>
          <span>What We Provide</span>
          <h2>Exclusive Services</h2>
        </div>
        <div className="container">
          <div className="row g-0">
            {props.services.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
              <div className="service-two-box">
                <h3><Link href={`/services/${item.id}`}>{item.title}</Link></h3>
                <p>{item.short}</p>
                <div className="service-two-icon d-flex-all justify-content-start">
                  <img src={item.image} alt={item.title} />
                  <Link href={`/services/${item.id}`}>
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* Service Style Two End */}

      <CallToActionSection en />
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices,
    },
  };
}
