import React, { useContext } from "react";

// context
import { UserContext } from "../context/UserContext";

// styles
import styled from "styled-components";
import { styles, breakpoints, typographys } from "../styles";

// assets
import { icons } from "../assets";

const { TextL1 } = typographys;

export const Toasts = () => {
  const { addItemSucces, setAddItemSucces } = useContext(UserContext);

  const [showToast, setShowToast] = React.useState(false);

  const closeToast = () => {
    setShowToast(false);
    setAddItemSucces(false);
  };

  React.useEffect(() => {
    if (addItemSucces) setShowToast(true);
    setTimeout(closeToast, 6000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addItemSucces]);

  return (
    <Wrapper succes={addItemSucces} showToast={showToast}>
      <IconAndText>
        <IconWrapper>
          <img
            src={addItemSucces ? icons.successIcon : icons.errorIcon}
            alt="Success icon"
          />
        </IconWrapper>
        {addItemSucces ? (
          <TextL1 color={styles.colors.neutrals.six}>
            <Span>Product</Span> redeemed successfully
          </TextL1>
        ) : (
          <TextL1 color={styles.colors.neutrals.six}>
            There was a problem with the transaction
          </TextL1>
        )}
      </IconAndText>
      <CloseButton onClick={closeToast}>
        <img src={icons.closeIcon} alt="Close icon" />
      </CloseButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${styles.colors.neutrals.cero};
  border: ${(props) =>
    props.succes ? "2px solid #29CC74" : "2px solid #E07F4F"};
  border-radius: 12px;
  box-shadow: ${styles.shadows.elevationOne.default};
  display: ${(props) => (props.showToast ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  position: fixed;
  bottom: 40px;
  left: 5%;
  margin-top: 12px;
  width: 90%;
  z-index: 15;

  ${breakpoints.tablet} {
    bottom: 40px;
    left: 80px;
    width: 532px;
  }
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  color: ${styles.colors.neutrals.nine};
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  height: 26px;
  width: 26px;

  img {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  width: 24px;

  img {
    width: 100%;
  }
`;
