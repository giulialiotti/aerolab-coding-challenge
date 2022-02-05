import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";

import { SelectorButton } from "../../components";

const { TextL1 } = typographys;

export const FilterSortPager = ({ buttonsState }) => {
  const { sortButtons, setSortButtons } = buttonsState;

  const handleClick = (valueOne, valueTwo, valueThree) => {
    setSortButtons({
      mostRecent: valueOne,
      lowestPrice: valueTwo,
      highestPrice: valueThree,
    });
  };

  return (
    <Wrapper>
      <SortWrapper>
        <SortTitle color={styles.colors.neutrals.six}>Sort by:</SortTitle>
        <StyledButton
          selected={sortButtons.mostRecent}
          onClick={() => handleClick(true, false, false)}
        >
          Most Recent
        </StyledButton>
        <StyledButton
          selected={sortButtons.lowestPrice}
          onClick={() => handleClick(false, true, false)}
        >
          Lowest Price
        </StyledButton>
        <SelectorButton
          selected={sortButtons.highestPrice}
          onClick={() => handleClick(false, false, true)}
        >
          Highest Price
        </SelectorButton>
      </SortWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SortTitle = styled(TextL1)`
  margin-right: 16px;
`;

const StyledButton = styled(SelectorButton)`
  margin-right: 12px;
`;
