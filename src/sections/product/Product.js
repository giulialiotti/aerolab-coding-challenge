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
  padding: 0 5.3%;
  margin-top: 80px;
  overflow-x: hidden;

  ${breakpoints.tabletPortrait} {
    margin-top: 24%;
    padding: 0 12%;
  }

  ${breakpoints.tabletLandscape} {
    padding: 0 7%;
    margin-top: 18%;
  }

  ${breakpoints.desktop} {
    padding: 0 8%;
    margin-top: 14%;
  }

  ${breakpoints.desktopXL} {
    padding: 0 12%;
    margin-top: 160px;
  }
`;
