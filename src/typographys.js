import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import { styles } from "./styles";

/* -------- TITLES | Desktop -------- */

const TitleL1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 96px;
  font-weight: 900;
  line-height: 80%;
  text-transform: uppercase;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 200px;
  } 
`;

const TitleL2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 80%;
  text-transform: uppercase;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 48px;
  } 
`;

const TitleL3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 32px;
  } 
`;

/* -------- TEXTS | Desktop -------- */

const TextL1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 18px;
  } 
`;

const TextL1AllCaps = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 24%;
  text-transform: uppercase;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 18px;
  } 
`;

const TextL1Light = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 18px;
  } 
`;

const TextL2 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 14px;
  } 
`;

const TextL2AllCaps = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12 px;
  font-weight: 600;
  line-height: 150%;
  text-transform: uppercase;
  color: ${props => props.color || styles.colors.neutrals.nine};

  ${breakpoints.desktop} {
    font-size: 14px;
    letter-spacing: 5%;
  } 
`;

export const typographys = {
  TitleL1,
  TitleL2,
  TitleL3,
  TextL1,
  TextL1AllCaps,
  TextL1Light,
  TextL2,
  TextL2AllCaps,
};
