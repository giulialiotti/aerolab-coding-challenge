import styled from "styled-components";

/* -------- TITLES | Desktop -------- */

const TitleL1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 200px;
  font-weight: 900;
  line-height: 80%;
  text-transform: uppercase;
`;

const TitleL2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 48px;
  font-weight: 900;
  line-height: 80%;
  text-transform: uppercase;
`;

const TitleL3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 100%;
  text-transform: uppercase;
`;

/* -------- TEXTS | Desktop -------- */

const TextL1 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
`;

const TextL1AllCaps = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 24%;
  text-transform: uppercase;
`;

const TextL1Light = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
`;

const TextL2 = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
`;

const TextL2AllCaps = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 5%;
  text-transform: uppercase;
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
