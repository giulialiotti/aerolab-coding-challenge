import React from "react";

// styles
import styled from "styled-components";
import { styles } from "../../styles";
import { typographys } from "../../typographys";

// assets
import { icons } from "../../assets";

// components
import { FlexSpaceBetween, SelectorButton, CTAButton } from "../../components";

const { TextL1, TextL2 } = typographys;

export const Aeropay = ({
  userData: { name, createDate },
  handleAddPoints,
}) => {
  // Clean date
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

  // Amounts for post request
  let body = [
    {
      amount: 1000,
    },
    {
      amount: 5000,
    },
    {
      amount: 7500,
    },
  ];

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
            <TextL2 color={styles.colors.neutrals.one}>
              {month}/{year}
            </TextL2>
          </NumerAndDate>
          <Waves>
            <img src={icons.wavePatternCard} alt="" />
          </Waves>
        </AeroCardWrapper>
        <AmountsWrapper>
          {body.map((item, index) => {
            return (
              <SelectorButton
                key={item.amount}
                isNumber
                selected={index === 1 ? true : false}
                onClick={() => handleAddPoints(item, item.amount)}
              >
                {item.amount}
              </SelectorButton>
            );
          })}
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
  overflow: hidden;
  padding: 16px;
  position: relative;
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

const Waves = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0%;
  width: 105%;

  img {
    width: 100%;
  }
`;
