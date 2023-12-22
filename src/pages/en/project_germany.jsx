import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const project_germany = () => {
  return (
    <Layouts en>
      <ImageView />

      <PageBanner pageTitle={"Project In germany"} pageDesc={""} />

      {/* Core Values Start */}
      <section className="gap core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <h2>Project In germany</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Project 1</h3>
                  <p>
                    Revert software streamlines the iterative process for
                    mechanical engineers, allowing seamless revisions and
                    improvements.
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
                    With Revert, mechanical design becomes a dynamic journey,
                    empowering engineers to backtrack and refine at every stage.
                  </p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Project 3</h3>
                  <p>
                    In the world of mechanical innovation, Revert software
                    serves as the toolkit for engineers, offering efficient undo
                    and redo capabilities.
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

      <CallToActionSection en />
    </Layouts>
  );
};
export default project_germany;
