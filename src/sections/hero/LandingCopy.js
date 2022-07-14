// styles
import styled from "styled-components";
import { styles, breakpoints, typographys } from "../../styles";

// components
import { LandingCTA } from "../../components";

// destructuring type styles
const { TextL1AllCaps, TitleL1, TextL1 } = typographys;

export const LandingCopy = () => {
  return (
    <Wrapper>
      <Label color={styles.colors.neutrals.six}>EXPLORE THE</Label>
      <Title>
        <Span>Tech</Span>
        <br />
        Zone
      </Title>
      <Text color={styles.colors.neutrals.six}>
        Here you’ll be able to exchange all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </Text>
      <LandingCTA href="#product" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: min-content;

  ${breakpoints.desktopXL} {
    display: block;
    margin: 0 0 29px;
  }
`;

const Label = styled(TextL1AllCaps)`
  text-align: center;

  ${breakpoints.desktopXL} {
    text-align: left;
  }
`;

const Title = styled(TitleL1)`
  text-align: center;
  margin-top: 8px;

  ${breakpoints.desktopXL} {
    text-align: left;
  }
`;

const Span = styled.span`
  background: ${styles.gradients.brand.default};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled(TextL1)`
  text-align: center;
  margin-top: 24px;

  ${breakpoints.desktopXL} {
    text-align: left;
  }
`;
