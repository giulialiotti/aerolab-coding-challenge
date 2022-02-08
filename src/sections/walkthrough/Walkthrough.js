import React from "react";

// styles
import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

// self components
import { IntroCard } from "./IntroCard";

// assets
import { illustrations, icons } from "../../assets";
import { styles } from "../../styles";

// animation
import { animateWalkthroughCards } from "../../animations";

export const Walkthrough = () => {
  const cardsWrapperRef = React.useRef(null);

  const cardOneRef = React.useRef(null);
  const cardThreeRef = React.useRef(null);

  const refs = {
    cardsWrapperRef,
    cardOneRef,
    cardThreeRef,
  };

  // Cards animation only for desktop breakpoint
  React.useLayoutEffect(() => {
    if (window.innerWidth >= 1920) {
      animateWalkthroughCards(refs);
    }
  }, []);

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

  ${breakpoints.desktop} {
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

  ${breakpoints.desktop} {
    top: 50%;
    transform: translateY(-50%);
    height: 528px;
    width: 100%;
  }
`;

const CardsWrapper = styled.div`
  ${breakpoints.desktop} {
    display: flex;
    margin: 0 auto;
    width: max-content;
  }
`;

const FirstCard = styled(IntroCard)`
  z-index: 1;
  
  ${breakpoints.desktop} {
    transform: rotate(-3deg) translateX(16%);
    will-change: transform;
  }
`;

const SecondCard = styled(IntroCard)`
  margin-top: 24px;

  ${breakpoints.desktop} {
    margin-top: 0;
    transform: translateY(-6%);
    will-change: transform;
    z-index: 2;
  }
`;

const ThirdCard = styled(IntroCard)`
  margin-top: 24px;

  ${breakpoints.desktop} {
    margin-top: 0;
    transform: rotate(3deg) translateX(-16%);
    will-change: transform;
    z-index: 3;
  }
`;
