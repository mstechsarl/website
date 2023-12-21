import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const project_germany = () => {
  return (
    <Layouts>
      <ImageView />

      <PageBanner pageTitle={"Projekte im Deutschland"} pageDesc={""} />

      {/* Core Values Start */}
      <section className="gap core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <h2>Projekte im Deutschland</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Project 1</h3>
                  <p>
                    Revert Software optimiert den iterativen Prozess für
                    Maschinenbauingenieure und ermöglicht nahtlose
                    Überarbeitungen und Verbesserungen.
                  </p>
                </div>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/revert1.png"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/revert2.png"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
                <div className="data">
                  <h3>Project 2</h3>
                  <p>
                    Mit Revert wird der mechanische Entwurf zu einer dynamischen
                    Reise, die Ingenieure ermächtigt, in jedem Stadium
                    zurückzugehen und zu verfeinern.
                  </p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Project 3</h3>
                  <p>
                    In der Welt der mechanischen Innovation dient die
                    Revert-Software als Werkzeugkasten für Ingenieure und bietet
                    effiziente Möglichkeiten zum Rückgängig machen und
                    Wiederholen.
                  </p>
                </div>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/revert3.png"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Core Values End */}

      <CallToActionSection  />
    </Layouts>
  );
};
export default project_germany;
