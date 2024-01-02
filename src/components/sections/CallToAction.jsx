import Data from "@data/sections/call-to-action";
import DataDe from "@data/sections/call-to-actionDe";
import Link from "next/link";

const CallToActionSection = ({ en }) => {
  const data = en ? Data : DataDe;
  return (
    <section className="cta-section gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="cta-data">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <Link href={data.button.link} className="theme-btn">
                {data.button.label}
                <i className="fa-solid fa-angles-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
