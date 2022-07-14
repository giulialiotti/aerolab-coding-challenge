import React from "react";

// Styles
import styled from "styled-components";
import { styles, breakpoints } from "styles";

// Self Components
import { IntroCard } from "./IntroCard";

// Assets
import { illustrations, icons } from "assets";

// Animation
// import { animateWalkthroughCards } from "./animations";

export const Walkthrough = () => {
  const cardsWrapperRef = React.useRef(null);

  const cardOneRef = React.useRef(null);
  const cardThreeRef = React.useRef(null);

  // Cards animation only for desktop breakpoint
  // React.useLayoutEffect(() => {
  //   if (window.innerWidth >= 1920) {
  //     animateWalkthroughCards(cardsWrapperRef, cardOneRef, cardThreeRef);
  //   }
  // }, []);

  return (
    <Wrapper id="walkthrough">
      <Background />
      <CardsWrapper ref={cardsWrapperRef}>
        <FirstCard
          designatedRef={cardOneRef}
          image={illustrations.walkthrougOneDesktop}
          alt="Illustration of woman on top of spaceship"
          title="1—browse"
          text="Browse our tech catalog with more than 20 top tech products"
          icon={icons.browseIcon}
          iconAlt=""
        />
        <SecondCard
          image={illustrations.walkthrougTwoDesktop}
          alt="Illustration of hands"
          title="2—choose"
          text="Exchange your hard earned AeroPoints for the item you want"
          icon={icons.chooseIcon}
          iconAlt=""
        />
        <ThirdCard
          designatedRef={cardThreeRef}
          image={illustrations.walkthrougThreeDesktop}
          alt="Illustration of person working in his desk"
          title="3—enjoy!"
          text="All done, you can relax! We’ll take care of delivery of your tech item!"
          icon={icons.enjoyIcon}
          iconAlt=""
        />
      </CardsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  padding-left: 5.3%;
  padding-right: 5.3%;
  margin-top: -24px;

  ${breakpoints.tabletLandscape} {
    padding-left: 1.7%;
    padding-right: 1.7%;
  }

  ${breakpoints.desktopXL} {
    padding-left: 0;
    padding-right: 0;
    margin-top: 112px;
  }
`;

const Background = styled.div`
  background: ${styles.gradients.specials.sectionBg};
  position: absolute;
  left: 0;
  bottom: -2%;
  height: 132%;
  width: 100vw;

  ${breakpoints.tabletLandscape} {
    bottom: -6%;
    height: 142%;
    width: 100%;
  }

  ${breakpoints.desktopXL} {
    top: 50%;
    bottom: unset;
    transform: translateY(-50%);
    height: 528px;
    width: 100%;
  }
`;

const CardsWrapper = styled.div`
  ${breakpoints.tabletLandscape} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${breakpoints.desktopXL} {
    margin: 0 auto;
    width: max-content;
  }
`;

const FirstCard = styled(IntroCard)`
  z-index: 1;

  ${breakpoints.desktopXL} {
    transform: rotate(-3deg) translateX(16%);
    will-change: transform;
  }
`;

const SecondCard = styled(IntroCard)`
  margin-top: 24px;

  ${breakpoints.tabletLandscape} {
    margin-top: 0;
    z-index: 2;
  }

  ${breakpoints.desktopXL} {
    transform: translateY(-6%);
    will-change: transform;
  }
`;

const ThirdCard = styled(IntroCard)`
  margin-top: 24px;

  ${breakpoints.tabletLandscape} {
    margin-top: 0;
  }

  ${breakpoints.desktopXL} {
    transform: rotate(3deg) translateX(-16%);
    will-change: transform;
    z-index: 3;
  }
`;
