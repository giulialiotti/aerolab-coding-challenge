// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { breakpoints } from "../../breakpoints";

// self components
import { LandingCopy } from "./LandingCopy";

// assets
import { illustrations } from "../../assets";

export const Hero = () => {
  return (
    <HeroWrapper as="header">
      <LandingCopy />
      <IllustrationWrapper>
        <ImageWrapper>
          <img src={illustrations.heroDesktop} alt="Illustration of person" />
        </ImageWrapper>
        <IllustrationBG />
      </IllustrationWrapper>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.header`
  ${breakpoints.desktop} {
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding-left: 12%;
    padding-right: 7.5%;
    margin-top: 45px;
  }
`;

const IllustrationWrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 795px;
  width: 897px;
  z-index: 1;

  img {
    max-width: 100%;
    height: 100%;
  }
`;

const IllustrationBG = styled.div`
  background: ${styles.gradients.specials.sectionBg};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 104px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 600px;
  width: 722px;
  z-index: 0;
`;
