import React from "react";

// Styles
import styled from "styled-components";
import { styles, typographys, breakpoints } from "styles";

// Context
import { useProductsContext } from "context/ProductsContext";

// Assets
import { icons } from "assets";

const { TextL1 } = typographys;

export const FilterCategory = () => {
  const { categories, activeFilter, setActiveFilter } = useProductsContext();

  const [showList, setShowList] = React.useState(false);

  const arrowRef = React.useRef(null);

  const handleOpenList = () => {
    if (showList) {
      // handle close
      arrowRef.current.style.transform = "rotate(90deg)";
      setShowList(!showList);
      // handle open
    } else {
      arrowRef.current.style.transform = "rotate(270deg)";
      setShowList(!showList);
    }
  };

  const handleListItem = (category) => {
    setActiveFilter(category);
    handleOpenList();
  };

  return (
    <Wrapper className="filter-category">
      <SortTitle color={styles.colors.neutrals.six}>Filter by:</SortTitle>
      <Filter onClick={handleOpenList}>
        {activeFilter}
        <ArrowIcon ref={arrowRef}>
          <img src={icons.arrowNextIcon} alt="Arrow down icon" />
        </ArrowIcon>
      </Filter>
      {showList && categories && (
        <CategoriesList>
          {categories.map((category) => {
            return (
              <CategoriesItem
                key={category}
                onClick={() => handleListItem(category)}
              >
                {category}
              </CategoriesItem>
            );
          })}
        </CategoriesList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${breakpoints.tabletLandscape} {
    width: min-content;
  }

  ${breakpoints.desktopXL} {
    width: auto;
  }
`;

const SortTitle = styled(TextL1)`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    margin-right: 16px;
    white-space: nowrap;
  }
`;

const Filter = styled.button`
  background: ${styles.colors.neutrals.cero};
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px 16px 24px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${styles.colors.neutrals.six};
  width: 100%;

  ${breakpoints.tabletPortrait} {
    width: 45%;
  }

  ${breakpoints.tabletLandscape} {
    width: 256px;
  }

  ${breakpoints.desktopXL} {
    font-size: 18px;
  }
`;

const ArrowIcon = styled.span`
  display: flex;
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
`;

const CategoriesList = styled.ul`
  background: ${styles.colors.neutrals.cero};
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 8px;
  list-style: none;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  z-index: 3;

  ${breakpoints.tabletPortrait} {
    width: 45%;
  }

  ${breakpoints.tabletLandscape} {
    width: 256px;
  }
`;

const CategoriesItem = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${styles.colors.neutrals.six};
  cursor: pointer;
  padding: 12px 24px;

  :hover {
    background: ${styles.colors.neutrals.one};
  }

  ${breakpoints.desktopXL} {
    font-size: 18px;
  }
`;
