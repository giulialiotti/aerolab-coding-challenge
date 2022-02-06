import React from "react";

// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { typographys } from "../../typographys";

// assets
import { logos, icons } from "../../assets";

// self components
import { Aeropay } from "./Aeropay";

// functions
import { getData } from "../../functions";

// user endpoint
const userUrl = "https://coding-challenge-api.aerolab.co/user/me";

export const Navbar = () => {
  const [showAeropay, setShowAeropay] = React.useState(false);
  const [user, setUser] = React.useState([]);

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

  React.useEffect(() => {
    getData(userUrl).then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Wrapper>
      <LogoWrapper>
        <img src={logos.aerolabLogoComplete} alt="Aerolab logo" />
      </LogoWrapper>
      <AeroCoinsWrapper>
        <AeroIconWrapper>
          <img src={icons.aerolabIcon} alt="Aerolab icon" />
        </AeroIconWrapper>
        <CoinAmount>{user.points}</CoinAmount>
        <ArrowWrapper ref={arrowRef} onClick={handleAeropay}>
          <img src={icons.arrowNextIcon} alt="Arrow down icon" />
        </ArrowWrapper>
        {showAeropay && <Aeropay userData={user} />}
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
  padding: 40px 12%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const LogoWrapper = styled.div`
  width: 126px;

  img {
    max-width: 100%;
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
  height: 32px;
  width: 32px;

  img {
    max-width: 100%;
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
