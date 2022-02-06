// styles
import styled from "styled-components";
import { breakpoints } from "../../breakpoints";

// components
// import { Section } from "../../components";

// self components
import { IntroCard } from "./IntroCard";

// assets
import { illustrations, icons } from "../../assets";
import { styles } from "../../styles";

export const Walkthrough = () => {
  return (
    <Wrapper id="walkthrough">
      <Background />
      <CardsWrapper>
        <FirstCard
          image={illustrations.walkthrougOneDesktop}
          alt=""
          title="1—browse"
          text="Browse our tech catalog with more than 20 top tech products"
          icon={icons.browseIcon}
          iconAlt=""
        />
        <SecondCard
          image={illustrations.walkthrougTwoDesktop}
          alt=""
          title="2—choose"
          text="Exchange your hard earned AeroPoints for the item you want"
          icon={icons.chooseIcon}
          iconAlt=""
        />
        <ThirdCard
          image={illustrations.walkthrougThreeDesktop}
          alt=""
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
`;

const Background = styled.div`
  background: ${styles.gradients.specials.sectionBg};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 528px;
  width: 100%;
`;

const CardsWrapper = styled.div`
  ${breakpoints.desktop} {
    display: flex;
    margin: 0 auto;
    width: max-content;
  }
`;

const FirstCard = styled(IntroCard)`
  transform: rotate(-3deg) translateX(16%);
  will-change: transform;
  z-index: 1;
`;

const SecondCard = styled(IntroCard)`
  transform: translateY(-6%);
  will-change: transform;
  z-index: 2;
`;

const ThirdCard = styled(IntroCard)`
  transform: rotate(3deg) translateX(-16%);
  will-change: transform;
  z-index: 3;
`;
