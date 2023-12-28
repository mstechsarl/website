import Data from "@data/sliders/projects";
import DataDe from "@data/sliders/projectsDe";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ProjectsSlider = ({ projects, en }) => {
  const data = en ? Data : DataDe;

  return (
    <section className="gap project-style-one light-bg-color">
      <div className="heading">
        <figure>
          <img src="/img/heading-icon.png" alt="Heading Icon" />
        </figure>
        <span>{data.subtitle}</span>
        <h2>{data.title}</h2>
      </div>
      <div className="container">
        <Swiper
          {...sliderProps.projectsSlider}
          className="swiper-container project-slider"
        >
          {projects.slice(0, data.numOfItems).map((item, key) => (
            <SwiperSlide key={`pjs-slide-${key}`} className="swiper-slide">
              <div className="project-post">
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="project-data">
                  <h3>
                    <Link href={`/${en ? "en" : "de"}/projects/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.short}</p>
                  <Link
                    className="project-icon"
                    href={`/${en ? "en" : "de"}/projects/${item.id}`}
                  >
                    <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsSlider;
