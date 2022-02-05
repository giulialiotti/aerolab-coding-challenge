import React from "react";
import styled from "styled-components";

export const Section = ({ children, ...props }) => {
  return <SectionWrapper {...props}>{children}</SectionWrapper>;
};

const SectionWrapper = styled.section`
  padding-left: 12%;
  padding-right: 12%;
  margin-top: ${props => props.mt || null};
`;
