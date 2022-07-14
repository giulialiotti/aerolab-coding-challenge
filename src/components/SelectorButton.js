import styled from "styled-components";
import { styles } from "../styles";
import { breakpoints } from "../breakpoints";

export const SelectorButton = ({ isNumber, selected, children, ...props }) => {
  return (
    <StyledButton type="button" isNumber={isNumber} selected={selected} {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${styles.gradients.brand.default};
  background-clip: ${(props) => (!props.selected ? "text" : null)};
  -webkit-background-clip: ${(props) => (!props.selected ? "text" : null)};
  -webkit-text-fill-color: ${(props) =>
    !props.selected ? "transparent" : null};
  border: none;
  border-radius: 12px;
  color: ${(props) => (props.selected ? styles.colors.neutrals.one : null)};
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: ${(props) => (props.isNumber ? '4px 19.6px' : '8px 24px' )};
  position: relative;
  white-space: nowrap;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.selected
        ? styles.gradients.brand.default
        : styles.colors.brand.light};
    border-radius: 12px;
    z-index: -1;
  }

  ${breakpoints.desktopXL} {
    font-size: 18px;
  }
`;
