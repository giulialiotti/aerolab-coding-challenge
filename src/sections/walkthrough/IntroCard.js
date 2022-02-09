// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { typographys } from "../../typographys";
import { breakpoints } from "../../breakpoints";

// destructuring type styles
const { TitleL3, TextL1 } = typographys;

export const IntroCard = ({
  designatedRef,
  className,
  image,
  alt,
  title,
  text,
  icon,
  iconAlt,
}) => {
  return (
    <Wrapper ref={designatedRef} className={className}>
      <TopCard>
        <img src={image} alt={alt} />
      </TopCard>
      <BottomCard>
        <TitleAndIcon>
          <Icon>
            <img src={icon} alt={iconAlt} />
          </Icon>
          <Title>{title}</Title>
        </TitleAndIcon>
        <Text color={styles.colors.neutrals.six}>{text}</Text>
      </BottomCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: ${styles.shadows.elevationTwo.default};
  border-radius: 32px;
  border: 1px solid ${styles.colors.neutrals.three};
  padding: 12px;
  position: relative;
  width: 100%;

  ${breakpoints.tablet} {
    width: 32.5%;
  }

  ${breakpoints.desktop} {
    background-color: ${styles.colors.neutrals.cero};
    width: 532px;
  }
`;

const TopCard = styled.div`
  background: ${styles.gradients.specials.illustrationBg};
  border-radius: 24px 24px 0 0;
  border: 1px solid ${styles.colors.neutrals.three};
  border-bottom-style: none;

  width: 100%;

  img {
    max-width: 100%;
    height: 100%;
  }

  ${breakpoints.desktop} {
    height: 498px;
  }
`;

const BottomCard = styled.div`
  background-color: ${styles.colors.neutrals.cero};
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 0 0 24px 24px;
  padding: 16px 24px 24px;
  width: 100%;

  ${breakpoints.desktop} {
    padding: 16px 115px 24px 24px;
  }
`;

const TitleAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  background-color: ${styles.colors.brand.light};
  border-radius: 8px;
  margin-right: 16px;
  padding: 7px;
  height: 40px;
  width: 40px;

  img {
    max-width: 100%;
    height: 100%;
  }

  ${breakpoints.desktop} {
    padding: 8px;
    height: 48px;
    width: 48px;
  }
`;

const Title = styled(TitleL3)`
  background: ${styles.gradients.brand.default};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`;

const Text = styled(TextL1)`
  margin-top: 12px;
`;
