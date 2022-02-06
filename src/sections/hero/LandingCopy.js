// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { typographys } from "../../typographys";

// components
import { LandingCTA } from "../../components";

// destructuring type styles
const { TextL1AllCaps, TitleL1, TextL1 } = typographys;

export const LandingCopy = () => {
  return (
    <Wrapper>
      <TextL1AllCaps color={styles.colors.neutrals.six}>
        EXPLORE THE
      </TextL1AllCaps>
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
  margin-bottom: 29px;
  width: min-content;
`;

const Title = styled(TitleL1)`
  margin-top: 8px;
`;

const Span = styled.span`
  background: ${styles.gradients.brand.default};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text = styled(TextL1)`
  margin-top: 24px;
`;
