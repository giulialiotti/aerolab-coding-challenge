// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { typographys } from "../../typographys";

// assets
import { icons } from "../../assets";

// components
import { FlexSpaceBetween, SelectorButton, CTAButton } from "../../components";

const { TextL1, TextL2 } = typographys;

export const Aeropay = ({ userData: { name, createDate } }) => {
  let date = new Date(createDate);
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let monthIndex = date.getMonth();
  let month = months[monthIndex];
  let year = date.getFullYear().toString().slice(-2);

  return (
    <Wrapper>
      <Header>
        <TextL1>Add Balance</TextL1>
      </Header>
      <Content>
        <AeroCardWrapper>
          <FlexSpaceBetween>
            <TextL1 color={styles.colors.neutrals.one}>Aerocard</TextL1>
            <Icon>
              <img src={icons.aerolabNeutralOne} alt="Aerolab icon" />
            </Icon>
          </FlexSpaceBetween>
          <NumerAndDate>
            <TextL2 color={styles.colors.neutrals.one}>{name}</TextL2>
            <TextL2 color={styles.colors.neutrals.one}>{month}/{year}</TextL2>
          </NumerAndDate>
        </AeroCardWrapper>
        <AmountsWrapper>
          <SelectorButton isNumber>1000</SelectorButton>
          <SelectorButton selected={true} isNumber>
            5000
          </SelectorButton>
          <SelectorButton isNumber>7500</SelectorButton>
        </AmountsWrapper>
        <AddPointsButton text="Add Points" />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${styles.colors.neutrals.cero};
  box-shadow: ${styles.shadows.elevationOne.hoverAndActive};
  border-radius: 16px;
  position: absolute;
  top: 112%;
  right: 0;
`;

const Header = styled.div`
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 16px 16px 0px 0px;
  border-bottom-style: none;
  padding: 16px 24px;
`;

const Content = styled.div`
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 0px 0px 16px 16px;
  padding: 24px;
`;

const AeroCardWrapper = styled.div`
  background-color: ${styles.colors.neutrals.nine};
  border-radius: 8px;
  padding: 16px;
  width: 264px;
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;

  img {
    max-width: 100%;
  }
`;

const NumerAndDate = styled(FlexSpaceBetween)`
  margin-top: 68px;
`;

const AmountsWrapper = styled(FlexSpaceBetween)`
  position: relative;
  margin-top: 40px;
  z-index: 1;
`;

const AddPointsButton = styled(CTAButton)`
  margin-top: 24px;
`;
