// Styles
import styled from "styled-components";
import { styles, breakpoints } from "styles";

// Self components
import { LandingCopy } from "./LandingCopy";

// Assets
import { icons, illustrations } from "assets";

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
      <Waves className="waves-pattern">
        <img src={icons.wavePattern} alt="Wave pattern" />
        <img src={icons.wavePattern} alt="Wave pattern" />
        <img src={icons.wavePattern} alt="Wave pattern" />
        <img src={icons.wavePattern} alt="Wave pattern" />
      </Waves>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.header`
  margin-top: 168px;
  padding-left: 5.3%;
  padding-right: 5.3%;
  overflow-x: hidden;

  ${breakpoints.tabletLandscape} {
    padding-left: 1.7%;
    padding-right: 1.7%;
  }

  ${breakpoints.desktopXL} {
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
  margin: 20px 0 0;

  ${breakpoints.tabletLandscape} {
    margin: 0 auto;
    width: min-content;
  }

  ${breakpoints.desktopXL} {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  transform: translateX(-21%);
  width: 170%;
  z-index: 1;

  img {
    max-width: 100%;
    height: 100%;
  }

  ${breakpoints.tabletLandscape} {
    transform: unset;
    height: 518.58px;
    width: 580px;
  }

  ${breakpoints.desktopXL} {
    transform: unset;
    height: 795px;
    width: 897px;
  }
`;

const IllustrationBG = styled.div`
  display: none;

  ${breakpoints.desktopXL} {
    display: block;
    border-radius: 104px;
    background: ${styles.gradients.specials.sectionBg};
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 600px;
    width: 722px;
    z-index: 0;
  }
`;

const Waves = styled.div`
  overflow: hidden;
  position: absolute;
  top: -2rem;
  left: 0;
  width: 100%;
  z-index: -1;

  img:nth-child(n + 2) {
    margin-top: -18px;
  }

  img:nth-child(n + 3) {
    display: none;
  }

  ${breakpoints.tabletLandscape} {
    top: -2rem;

    img {
      width: 100%;
    }

    img:nth-child(n + 3) {
      display: block;
    }

    img:nth-child(4) {
      display: none;
    }
  }

  ${breakpoints.desktopXL} {
    top: -2rem;

    img:nth-child(4) {
      display: block;
    }
  }
`;
