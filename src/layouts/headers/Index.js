import DefaultHeader from "./DefaultHeader";

const Header = ({ header, contactButton, cartButton, en }) => {
  switch (header) {
    case 1:
      return (
        <DefaultHeader
          contactButton={contactButton}
          cartButton={cartButton}
          en={en}
        />
      );

    default:
      return (
        <DefaultHeader
          contactButton={contactButton}
          cartButton={cartButton}
          en={en}
        />
      );
  }
};
export default Header;
