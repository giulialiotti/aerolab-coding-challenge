import React from "react";

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

// Animations
import { Draggable } from "gsap/all";

const { TextL1 } = typographys;

export const FilterSortPager = () => {
  const { activeSortButton, setActiveSortButton } = useProductsContext();

  React.useEffect(() => {
    Draggable.create(".sort-buttons__inner-wrapper", {
      type: "x",
      bounds: ".sort-buttons",
      zIndexBoost: false,
      allowEventDefault: true,
    });
  }, []);

  return (
    <Wrapper className="filter-sort-pager">
      <FilterCategory />
      <Divider />
      <SortWrapper className="sort-buttons">
        <SortTitle color={styles.colors.neutrals.six}>Sort by:</SortTitle>
        <SortButtons className="sort-buttons__inner-wrapper">
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
        </SortButtons>
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
  @media (max-width: 545px) {
    width: 100%;
  }

  display: flex;
  align-items: center;
  margin-top: 24px;
  width: max-content;

  ${breakpoints.tabletLandscape} {
    margin-top: 26.5px;
  }

  ${breakpoints.desktopXL} {
    margin-top: 0;
  }
`;

const SortButtons = styled.div`
  display: flex;
  align-items: center;
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
