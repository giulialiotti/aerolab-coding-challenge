import styled from "styled-components";

export const Spacer = () => {
  return <Wrapper className="spacer" />;
};

const Wrapper = styled.div`
  height: ${(props) => props.height || "160px"};
`;
