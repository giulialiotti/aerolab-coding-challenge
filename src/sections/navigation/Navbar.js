import React, { useContext } from "react";

// context
import { UserContext } from "../../context/UserContext";

// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { typographys } from "../../typographys";
import { breakpoints } from "../../breakpoints";

// assets
import { logos, icons } from "../../assets";

// self components
import { Aeropay } from "./Aeropay";

export const Navbar = () => {
  const { user, handleAddPoints } = useContext(UserContext);

  const [showAeropay, setShowAeropay] = React.useState(false);

  const arrowRef = React.useRef(null);

  const handleAeropay = () => {
    if (showAeropay) {
      // handle close
      arrowRef.current.style.transform = "rotate(90deg)";
      setShowAeropay(!showAeropay);
      // handle open
    } else {
      arrowRef.current.style.transform = "rotate(270deg)";
      setShowAeropay(!showAeropay);
    }
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <img
          className="logo-mobile"
          src={logos.aerolabLogo}
          alt="Aerolab logo"
        />
        <img
          className="logo-desktop"
          src={logos.aerolabLogoComplete}
          alt="Aerolab logo"
        />
      </LogoWrapper>
      <AeroCoinsWrapper>
        <AeroIconWrapper>
          <img src={icons.aerolabIcon} alt="Aerolab icon" />
        </AeroIconWrapper>
        <CoinAmount>{user.points}</CoinAmount>
        <ArrowWrapper ref={arrowRef} onClick={handleAeropay}>
          <img src={icons.arrowNextIcon} alt="Arrow down icon" />
        </ArrowWrapper>
        {showAeropay && (
          <Aeropay userData={user} handleAddPoints={handleAddPoints} />
        )}
      </AeroCoinsWrapper>
    </Wrapper>
  );
};

const { TextL1 } = typographys;

const Wrapper = styled.nav`
  background-color: ${styles.colors.neutrals.cero};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 5.3%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  ${breakpoints.desktop} {
    padding: 40px 12%;
  }
`;

const LogoWrapper = styled.div`
  width: 38.77px;

  .logo-desktop {
    display: none;
  }

  img {
    max-width: 100%;
  }  

  ${breakpoints.desktop} {
    width: 126px;

    .logo-mobile {
      display: none;
    }

    .logo-desktop {
      display: block;
    }
  }
`;

const AeroCoinsWrapper = styled.div`
  background: ${styles.colors.neutrals.cero};
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 16px;
  box-shadow: ${styles.shadows.elevationOne.default};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  position: relative;
`;

const AeroIconWrapper = styled.div`
  display: flex;
  margin-right: 8px;
  height: 24px;
  width: 24px;

  img {
    max-width: 100%;
  }

  ${breakpoints.desktop} {
    height: 32px;
    width: 32px;
  }
`;

const ArrowWrapper = styled.div`
  cursor: pointer;
  margin-left: 16px;
  transform: rotate(90deg);
  transition: transform 0.4s ease-in-out;
  height: 24px;
  width: 24px;

  img {
    max-width: 100%;
  }
`;

const CoinAmount = styled(TextL1)`
  background: ${styles.gradients.brand.default};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
