import Data from "@data/sections/renovation";
import DataDe from "@data/sections/renovationDe";
import Link from "next/link";

const RenovationSection = ({ en = false }) => {
  const data = en ? Data : DataDe;
  const styles = {
    parallax: {
      backgroundImage: "url(" + data.bg_image + ")",
    },
  };
  return (
    <section className="gap renovation">
      <div className="parallax" style={styles.parallax}></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="reno-data">
              <h3>{data.subtitle}</h3>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="bbtn">
                <figure>
                  <img
                    className="w-auto circle-layer"
                    src={data.image_circle_text.url}
                    alt={data.image_circle_text.alt}
                  />
                </figure>
                <Link href={data.link}>
                  <i className="fa-solid fa-arrow-up-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RenovationSection;
