import React from "react";

// Styles
import styled from "styled-components";
import { breakpoints } from "styles";

// Self Components
import { TitleAndControls } from "./TitleAndControls";
import { Products } from "./Products";

export const Product = () => {
  return (
    <SectionWrapper id="product">
      <TitleAndControls />
      <Products />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  padding-left: 5.3%;
  padding-right: 5.3%;
  margin-top: 80px;

  ${breakpoints.tabletLandscape} {
    padding-left: 1.7%;
    padding-right: 1.7%;
    margin-top: 170px;
  }

  ${breakpoints.desktopXL} {
    padding-left: 12%;
    padding-right: 12%;
    margin-top: 160px;
  }
`;
