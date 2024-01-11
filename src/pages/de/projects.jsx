import Layouts from "@layouts/Layouts";
import Link from "next/link";
import CallToActionSection from "@components/sections/CallToAction";
import { getSortedProjectsData } from "@library/projects";


import PageBanner from "@components/PageBanner";

const Portfolio = (props) => {
  return (
    <Layouts de>
      <PageBanner pageTitle={"Projeckte im libanon"} pageDesc={""} where="l" de />

      {/* Our Project Two Start */}
      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {props.projects.map((item, key) => (
              <div key={`projects-item-${key}`} className="col-lg-6">
                <div className="project-post">
                  <figure>
                    <img className="w-100" src={item.image} alt={item.title} />
                  </figure>
                  <div className="project-data">
                    <h3>
                      <Link href={`/en/projects/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p>{item.short}</p>
                    <Link
                      className="project-icon"
                      href={`/en/projects/${item.id}`}
                    >
                      <i className="fa-solid fa-angles-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CallToActionSection de />

      {/* Our Project Two End */}
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData(true);

  return {
    props: {
      projects: allProjects,
    },
  };
}
