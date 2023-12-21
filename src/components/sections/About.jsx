import Data from "@data/sections/about";
import DataDe from "@data/sections/aboutDe";

const AboutSection = ({ en }) => {
  const data = en ? Data : DataDe;
  return (
    <section className="about-style-one">
      <div className="container gap">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-data-left">
              <figure>
                <img src={data.image1.url} alt={data.image1.alt} />
              </figure>
              <figure className="about-image">
                <img src={data.image2.url} alt={data.image2.alt} />
              </figure>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-data-right">
              <span>{data.subtitle}</span>
              <h2>{data.title}</h2>
              <div className="about-info">
                <p>{data.text}</p>
                <figure>
                  <img
                    className="light-icon"
                    src={data.signature.light}
                    alt={data.signature.alt}
                  />
                  <img
                    className="dark-icon"
                    src={data.signature.dark}
                    alt={data.signature.alt}
                  />
                </figure>
                <h3>{data.name}</h3>
                <h4>{data.role}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
