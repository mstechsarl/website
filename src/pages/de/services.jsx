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
    <Layouts>
      <PageBanner pageTitle={"Leistungen"} pageDesc={""} />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <span>Plan</span>
          <h2>Wie es funktioniert</h2>
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
                <h3>Planung</h3>
                <p>
                  Präzision in der Planung definiert die Exzellenz unseres
                  mechanischen Bauunternehmens und garantiert eine reibungslose
                  und erfolgreiche Projektausführung.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">2.</div>
                <h3>Unternehmensberatung</h3>
                <p>
                  Unsere Beratungsdienstleistungen dienen als leitende Kraft und
                  steigern die Effizienz sowie den Erfolg unserer Bauvorhaben
                  durch strategische Einblicke und fachkundige Anleitung.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">3.</div>
                <h3>Projektmanagement</h3>
                <p>
                  Die Orchestrierung von schlüssiger Exzellenz, die
                  Sicherstellung effizienter Abläufe und die Bereitstellung
                  strategischer Richtung für den Erfolg bei Bauvorhaben.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="plans">
                <div className="y-box d-flex-all">4.</div>
                <h3>Installation</h3>
                <p>
                  Gewährleistung der Kundenzufriedenheit, optimale
                  Systemleistung, Einhaltung von Vorschriften und insgesamt
                  Sicherheit in unserem Unternehmen für mechanische Bauarbeiten.
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
                  <h2 style={{ fontSize: "35px" }}>
                    Unsere Leistungen
                  </h2>
                  <Nav variant="pills" className="nav nav-pills mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-0">Sanitär</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-1">
                        Heizung
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-2">Klimaanlage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-3">Sonnensystem</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-4">Planung</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-5">Wartung und Notdienst</Nav.Link>
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
                        <h3>Sanitär</h3>
                        <p>
                         Ein Sanitärsystem dient zwei Zwecken: der Wasserversorgung für den menschlichen Gebrauch und der Beseitigung menschlicher Abfälle.  Wir konzipieren und realisieren Rohrleitungen, die Wasser zu den verschiedenen Wasserhähnen, Armaturen und zum Wasser führen und Abwasser ohne Verstopfung in die Abwasserkanäle oder Klärgruben leiten.
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
                        <h3>Heizung</h3>
                        <p>
                          Wir entwerfen und realisieren aufeinander abgestimmte
                          Heizungssysteme und bieten hohen Komfort bei geringen
                          Energiekosten, sowohl in Neubauten als auch bei
                          Renovierungsprojekten.                        </p>
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
                        <h3>Klimaanlage</h3>
                        <p>
                         Klimaanlagen werden eingesetzt, um die Wärme eines Prozesses oder einer Anlage abzuleiten.  Wir konzipieren und realisieren Klimasysteme mit einer Kombination aus angemessener Isolierung, Energieeffizienzen Fenstern und Türen, Tageslicht, Beschattung und Belüftung, die in heißen Klimazonen das Zuhause mit einem Minimum an Energieverbrauch kühl halten.
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
                        <h3>Sonnensystem</h3>
                        <p>
                          Solaranlagen Ihr Zuhause mit einer aktiven Solaranlage kann im Winter Ihre Brennstoff- und Stromkosten erheblich senken.  Wir entwickeln Solarheizung, indem wir Sonnenenergie zum Erhitzen von Wasser verwenden und die Sonnenwärme dann direkt in den Innenraum oder in ein Speichersystem zur späteren Verwendung übertragen.

  
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
                        <h3>Planung</h3>
                        <p>
                          Unter Verwendung von Codes und Zeichenprogrammen wie
                          AutoCAD, Autodesk Inventor und Revit erstellen wir 2D-
                          und 3D-Zeichnungen (Pläne und detaillierte Schnitte),
                          P&ID- und Isometriezeichnungen, Mengen- und
                          Spezifikationslisten.
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
                        <h3>Wartung und Notdienst</h3>
                        <p>
                         Funktionieren die Sanitär, Heizung und Klimaanlagen einwandfrei?  Unser Team ist bereit, die verschiedenen mechanischen Systeme in Ihrem Wohnsitz, Gebäude, Krankenhaus, in der Schule usw. zu überprüfen und zu reparieren.

Die Lösung Ihrer Probleme bei Heizung und Sanitär.
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

      <CountersSection />

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

      <CallToActionSection />
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
