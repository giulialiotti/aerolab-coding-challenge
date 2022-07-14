import React from "react";

// Styles
import styled from "styled-components";
import { breakpoints } from "styles";

export const Section = ({ children, ...props }) => {
  return <SectionWrapper {...props}>{children}</SectionWrapper>;
};

const SectionWrapper = styled.section`
  padding-left: 5.3%;
  padding-right: 5.3%;
  margin-top: ${(props) => props.mt || null};

  ${breakpoints.desktopXL} {
    padding-left: 12%;
    padding-right: 12%;
    margin-top: ${(props) => props.mt || null};
  }
`;
