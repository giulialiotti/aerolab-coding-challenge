import React from "react";

// Styles
import styled from "styled-components";
import { styles, breakpoints } from "styles";

// Assets
import { icons } from "assets";

export const CTAButton = ({ product, disabled, text, ...props }) => {
  const [redeemText, setRedeemText] = React.useState("Redeem for");

  const handleChange = (text) => {
    if (!disabled && product) setRedeemText(text);
  };

  return (
    <StyledButton
      type="button"
      product={product}
      disabled={disabled}
      onMouseEnter={() => handleChange("Redeem now!")}
      onMouseLeave={() => handleChange("Redeem for")}
      {...props}
    >
      {product && (!disabled ? redeemText : "You need")}
      {redeemText !== "Redeem now!" && (
        <>
          <Span bgImage={!disabled ? icons.aerolabWhite : icons.aerolabGray} />
          {text}
        </>
      )}
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
    !props.disabled ? styles.colors.neutrals.cero : styles.colors.neutrals.six};
  cursor: ${(props) => (!props.disabled ? "pointer" : "default")};
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: ${(props) => (props.product ? "16px 24px" : "12px 24px")};
  width: 100%;

  :hover {
    background: ${(props) =>
      !props.disabled
        ? styles.gradients.brand.hover
        : null};
  }

  ${breakpoints.desktopXL} {
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
