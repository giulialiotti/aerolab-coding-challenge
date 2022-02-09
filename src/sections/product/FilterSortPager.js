// styles
import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";
import { breakpoints } from "../../breakpoints";

// components
import { SelectorButton } from "../../components";

// self components
import { FilterCategory } from "./FilterCategory";

const { TextL1 } = typographys;

export const FilterSortPager = ({ categories, buttonsState }) => {
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
      <FilterCategory categories={categories} />
      <Divider />
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

  ${breakpoints.tablet} {
    margin-top: 42px;
  }

  ${breakpoints.desktop} {
    display: flex;
    margin-top: 40px;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  ${breakpoints.tablet} {
    margin-top: 26.5px;
  }
  
  ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

const SortTitle = styled(TextL1)`
  display: none;

  ${breakpoints.desktop} {
    margin-right: 16px;
  }
`;

const StyledButton = styled(SelectorButton)`
  margin-right: 12px;
`;

const Divider = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    background-color: ${styles.colors.neutrals.three};
    margin: 0px 40px;
    height: 59px;
    width: 2px;
  }
`;
