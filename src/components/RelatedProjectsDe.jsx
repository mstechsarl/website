import Link from "next/link";

const RelatedProjectsDe = ({ projects, en }) => {
  return (
    <>
      <section className="gap no-top project-style-one extra addition">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Firmenprojekte</span>
          <h2>Verwandte Projekte</h2>
        </div>
        <div className="container">
          <div className="row project-slider">
            {projects.slice(0, 2).map((item, key) => (
              <div key={`relatedprojects-item-${key}`} className="col-lg-6">
                <div className="project-post">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                  <div className="project-data">
                    <h3>
                      <Link href={`/${en ? "en" : "de"}/projectsDe/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p>{item.short}</p>
                    <Link
                      className="project-icon"
                      href={`/${en ? "en" : "de"}/projectsDe/${item.id}`}
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
    </>
  );
};
export default RelatedProjectsDe;
