import React from "react";

// styles
import styled from "styled-components";
import { typographys } from "../../typographys";
import { styles } from "../../styles";
import { breakpoints } from "../../breakpoints";

const { TextL1 } = typographys;

export const FilterCategory = ({ categories }) => {
  const [showList, setShowList] = React.useState(false);

  const arrowRef = React.useRef(null);

  const handleOpenList = () => {
    if (showList) {
      // handle close
      arrowRef.current.style.transform = "rotate(0)";
      setShowList(!showList);
      // handle open
    } else {
      arrowRef.current.style.transform = "rotate(180deg)";
      setShowList(!showList);
    }
  };

  return (
    <Wrapper>
      <SortTitle color={styles.colors.neutrals.six}>Filter by:</SortTitle>
      <Filter onClick={handleOpenList}>
        All products
        <Icon ref={arrowRef} />
      </Filter>
      {showList && (
        <CategoriesList>
          {categories.map((category) => {
            return <CategoriesItem key={category}>{category}</CategoriesItem>;
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

  ${breakpoints.tablet} {
    width: min-content;
  }

  ${breakpoints.desktop} {
    width: auto;
  }
`;

const SortTitle = styled(TextL1)`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    margin-right: 16px;
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

  ${breakpoints.tablet} {
    width: 256px;
  }

  ${breakpoints.desktop} {
    font-size: 18px;
  }
`;

const Icon = styled.span`
  background-color: #000000;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  height: 8px;
  width: 8px;
`;

const CategoriesList = styled.ul`
  background: ${styles.colors.neutrals.cero};
  border: 1px solid ${styles.colors.neutrals.three};
  border-radius: 8px;
  list-style: none;
  position: absolute;
  top: 110%;
  right: 0;
  width: 100%;
  z-index: 3;

  ${breakpoints.tablet} {
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

  ${breakpoints.desktop} {
    font-size: 18px;
  }
`;
