import Head from "next/head";
import Link from "next/link";
import appData from "@data/app";
import appDataDe from "@data/appDe";

const PageBanner = ({ pageTitle, pageDesc, where, en }) => {
  const data = en ? appData : appDataDe;
  const styles = {
    parallax: {
      backgroundImage: "url(/images/pattren-3.png)",
    },
  };
  const headTitle = `${data.settings.siteName} - ${pageTitle}`;
  const whereList = data.header.menu[3].children.filter(
    (link) => link.where !== where
  );
  console.log(whereList);
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <section className="banner-style-one">
        <div className="parallax" style={styles.parallax} />

        <div className="container">
          <div className="row">
            <div className="banner-details">
              <h2>{pageTitle}</h2>
              <p>{pageDesc}</p>
            </div>
          </div>
        </div>
        <div className="breadcrums">
          <div className="container">
            <div className="row">
              {where ? (
                <ul>
                  {whereList.map((link) => (
                    <li style={{ textDecoration: "underline" }}>
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul>
                  <li>
                     <Link href={`/${en ? "en" : "de"}`}>
                      <i className="fa-solid fa-house"></i>
                      <p>Home</p>
                    </Link>
                  </li>
                  <li className="current">
                    <p>{pageTitle}</p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageBanner;
