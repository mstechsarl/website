import DefaultFooter from "./DefaultFooter";

const Footer = ({ footer, en }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter en={en} />;
    default:
      return <DefaultFooter en={en} />;
  }
};
export default Footer;
