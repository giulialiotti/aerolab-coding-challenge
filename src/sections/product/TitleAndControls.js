// Styles
import styled from "styled-components";
import { styles, typographys } from "styles";

// Self Components
import { FilterSortPager } from "./FilterSortPager";

const { TitleL2 } = typographys;

export const TitleAndControls = () => {
  return (
    <Wrapper>
      <TitleL2>
        <SpanBlue>Tech</SpanBlue> Products
      </TitleL2>
      <FilterSortPager />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SpanBlue = styled.span`
  color: ${styles.colors.brand.blue};
`;
