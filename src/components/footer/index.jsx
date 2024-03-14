import icon from "./s-s.svg";
import {
  Border,
  FooterContainer,
  FrontText,
  Logo,
  Text,
} from "./CardBusiness.style";
export const Footer = ({ website = "My Website" }) => {
  return (
    <FooterContainer>
      <FrontText>
        <span>By Sebastián Siman</span>
        <div>
          <p>{website}</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </FrontText>
      <Border />
      <Logo src={icon} alt="Logo" />

      <Text>
        <a
          href="https://seebaasiman.github.io/Sebastian.Siman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a
          href="mailto:seebaasiman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>
      </Text>
    </FooterContainer>
  );
};
