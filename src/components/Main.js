// Styles
import styled from "styled-components";

export const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  postion: relative;
  overflow: hidden;
`;
