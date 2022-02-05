// styles
import styled from "styled-components";
import { styles } from "../styles";
import { breakpoints } from "../breakpoints";

// assets
import { icons } from "../assets";

export const CTAButton = ({ disabled, cost, ...props }) => {
  return (
    <StyledButton type="button" disabled={disabled} {...props}>
      Redeem for
      <Span bgImage={!disabled ? icons.aerolabWhite : icons.aerolabGray} />
      {cost}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${(props) =>
    !props.disabled
      ? styles.gradients.brand.default
      : styles.colors.neutrals.two};
  border: none;
  border-radius: 16px;
  box-shadow: ${styles.shadows.elevationOne.default};
  color: ${(props) =>
    !props.disabled ? styles.colors.neutrals.one : styles.colors.neutrals.six};
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: 16px 24px;
  width: 100%;

  ${breakpoints.desktop} {
    font-size: 18px;
  }
`;

const Span = styled.span`
  display: inline-block;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 8px;
  height: 24px;
  width: 24px;
  vertical-align: top;
`;
