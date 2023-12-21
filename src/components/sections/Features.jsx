import { useState } from "react";
import Data from "@data/sections/features";
import DataDe from "@data/sections/featuresDe";
import Accordion from "react-bootstrap/Accordion";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const FeaturesSection = ({ en }) => {
  const data = en ? Data : DataDe;
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="core-features gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="space">
              <div className="heading-style-2">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="data">
                        <span>{data.subtitle}</span>
                        <h2>{data.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Accordion defaultActiveKey="features-acc-0">
                {data.items.map((item, key) => (
                  <Accordion.Item
                    key={`features-item-${key}`}
                    eventKey={`features-acc-${key}`}
                  >
                    <Accordion.Header>
                      <span className="num">{item.num}</span> {item.title}
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>{item.text}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="shape">
              <div className="video">
                <figure>
                  <img src={data.image.url} alt={data.image.alt} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={data.yt_video_id}
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default FeaturesSection;
