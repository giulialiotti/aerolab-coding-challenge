// Styles
import styled from "styled-components";
import { styles, breakpoints, typographys } from "styles";

// Local Components
import { SelectorButton } from "components";

// Self components
import { FilterCategory } from "./FilterCategory";

// Context
import { useProductsContext } from "context/ProductsContext";

// Utils
import { sortButtons } from "utils";

const { TextL1 } = typographys;

export const FilterSortPager = () => {
  const { activeSortButton, setActiveSortButton } = useProductsContext();

  return (
    <Wrapper>
      <FilterCategory />
      <Divider />
      <SortWrapper>
        <SortTitle color={styles.colors.neutrals.six}>Sort by:</SortTitle>
        {sortButtons.map((button) => {
          const isActive = activeSortButton === button.order;
          return (
            <StyledButton
              key={button.order}
              selected={isActive ? true : false}
              onClick={() => setActiveSortButton(button.order)}
            >
              {button.order}
            </StyledButton>
          );
        })}
      </SortWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;

  ${breakpoints.tabletLandscape} {
    margin-top: 42px;
  }

  ${breakpoints.desktopXL} {
    display: flex;
    margin-top: 40px;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  ${breakpoints.tabletLandscape} {
    margin-top: 26.5px;
  }

  ${breakpoints.desktopXL} {
    margin-top: 0;
  }
`;

const SortTitle = styled(TextL1)`
  display: none;

  ${breakpoints.desktopXL} {
    margin-right: 16px;
  }
`;

const StyledButton = styled(SelectorButton)`
  margin-right: 12px;
`;

const Divider = styled.div`
  display: none;

  ${breakpoints.desktopXL} {
    display: block;
    background-color: ${styles.colors.neutrals.three};
    margin: 0px 40px;
    height: 59px;
    width: 2px;
  }
`;
