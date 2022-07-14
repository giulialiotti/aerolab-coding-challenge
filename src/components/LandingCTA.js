// styles
import styled from "styled-components";
import { styles, breakpoints } from "../styles";

// assets
import { icons } from "../assets";

export const LandingCTA = ({ href }) => {
  return (
    <Link href={href}>
      VIEW PRODUCTS
      <ArrowIcon src={icons.arrowDownIcon} alt="Arrow pointing down" />
    </Link>
  );
};

const Link = styled.a`
  background: ${styles.gradients.brand.default};
  border: none;
  border-radius: 24px;
  box-shadow: ${styles.shadows.elevationOne.default};
  color: ${styles.colors.neutrals.cero};
  cursor: pointer;
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: 20px 48px;
  margin-top: 40px;
  text-decoration: none;
  width: fit-content;

  :hover {
    background: ${styles.gradients.brand.hover};
  }

  ${breakpoints.desktopXL} {
    border-radius: 16px;
    font-size: 18px;
    padding: 24px 40px;
    margin-top: 64px;
  }
`;

const ArrowIcon = styled.img`
  margin-left: 10.38px;
  width: 10.69px;

  ${breakpoints.desktopXL} {
    margin-left: 12.5px;
    width: 14.25px;
  }
`;
