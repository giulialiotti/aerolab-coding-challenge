// styles
import styled from "styled-components";
import { styles } from "../styles";
import { breakpoints } from "../breakpoints";

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
  border-radius: 16px;
  box-shadow: ${styles.shadows.elevationOne.default};
  color: ${styles.colors.neutrals.cero};
  cursor: pointer;
  display: block;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: 24px 40px;
  text-decoration: none;
  width: fit-content;

  :hover {
    background: ${styles.gradients.brand.hover};
  }

  ${breakpoints.desktop} {
    font-size: 18px;
    margin-top: 64px;
  }
`;

const ArrowIcon = styled.img`
  margin-left: 12.5px;
  width: 14.25px;
`;
